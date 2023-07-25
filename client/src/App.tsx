import { AuthProvider, Refine } from "@pankod/refine-core";
import {
  CssBaseline,
  ErrorComponent,
  GlobalStyles,
  ReadyPage,
  RefineSnackbarProvider,
  notificationProvider,
} from "@pankod/refine-mui";
import {
  SettingsOutlined,
  MessageOutlined,
  PersonSearchOutlined,
  StarOutlineOutlined,
  TravelExploreOutlined,
} from '@mui/icons-material'


import { MuiInferencer } from "@pankod/refine-inferencer/mui";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";
import axios, { AxiosRequestConfig } from "axios";
import { Header, Layout, Sider, Title } from "components/layout";
import { ColorModeContextProvider } from "contexts";
import { CredentialResponse } from "interfaces/google";

import {
   Login,
   Home,
   People,
   MyProfile,
   AdventureDetails,
   AllAdventures,
   CreateAdventure,
   PeopleProfile,
   EditAdventure,
 } from "pages";

import { parseJwt } from "utils/parse-jwt";
import { profile } from "console";

// Creăm o instanță Axios și adăugăm un interceptor pentru cererile HTTP
// Acest interceptor adaugă un header de autorizare în fiecare cerere folosind token-ul din localStorage
const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (request.headers) {
    request.headers["Authorization"] = `Bearer ${token}`;
  } else {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return request;
});

// Definim componenta principală a aplicației
function App() {
  const authProvider: AuthProvider = {
    // Funcția de autentificare care este apelată atunci când un utilizator se autentifică
    login: async({ credential }: CredentialResponse) => {
      const profileObj = credential ? parseJwt(credential) : null;
      
      // Save user to MONGODB
      if(profileObj){
        const response=await fetch('http://localhost:8080/api/v1/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({
            name: profileObj.name,
            email: profileObj.email,
            avatar: profileObj.picture,
          }),
        },
        );
        const data= await response.json();

        if(response.status===200){
          // Salvăm informațiile utilizatorului în localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...profileObj,
            avatar: profileObj.picture,
            userid: data._id
          })
        );
        }
        else{
          return Promise.reject();
        }
      } 
// Salvăm token-ul în localStorage
      localStorage.setItem("token", `${credential}`);
      return Promise.resolve();
    },
    // Funcția de delogare care este apelată atunci când un utilizator se deloghează
    logout: () => {
      const token = localStorage.getItem("token");

      if (token && typeof window !== "undefined") {
        // Ștergem token-ul și informațiile utilizatorului din localStorage

        localStorage.removeItem("token");
        localStorage.removeItem("user");
        axios.defaults.headers.common = {};
         // Revoke token-ul de autentificare de la serviciul Google (dacă există)
        window.google?.accounts.id.revoke(token, () => {
          return Promise.resolve();
        });
      }

      return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: async () => {
      const token = localStorage.getItem("token");

      if (token) {
        return Promise.resolve();
      }
      return Promise.reject();
    },

    getPermissions: () => Promise.resolve(),
    getUserIdentity: async () => {
      const user = localStorage.getItem("user");
      if (user) {
        return Promise.resolve(JSON.parse(user));
      }
    },
  };

  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
        //base root route of our API
           dataProvider={dataProvider('http://localhost:8080/api/v1')}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          resources={[
            {
              name: "adventures", //explore
              options: {label: 'Explore'},
              list: AllAdventures,
              show: AdventureDetails,
              create: CreateAdventure,
              edit: EditAdventure,
              icon: <TravelExploreOutlined/>,
            },
            {
              name: "users",
            
              list: People,
              show: PeopleProfile,
              options: {label: 'People'},
              icon: <PersonSearchOutlined/>,
            },
            {
              name: "forum",
              options: {label: 'Forum'},
              list: Home,
              icon: <StarOutlineOutlined/>,
            },
            {
              name: "messages",
              list: Home,
              icon: <MessageOutlined/>,
            },
            {
              name: "my-profile",
              options: {label: 'My Profile'},
              list: MyProfile,
              icon: <SettingsOutlined/>,
            },
          ]}
          Title={Title}
          Sider={Sider}
          Layout={Layout}
          Header={Header}
          routerProvider={routerProvider}
          authProvider={authProvider}
          LoginPage={Login}
          DashboardPage={Home}
        />
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;
