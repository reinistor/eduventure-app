import EmailOutlined from "@mui/icons-material/EmailOutlined";
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import Phone from "@mui/icons-material/Phone";
import Place from "@mui/icons-material/Place";
import { useGetIdentity } from "@pankod/refine-core";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { PeopleCardProp, InfoBarProps } from "interfaces/users";

const InfoBar =({ icon,name}:InfoBarProps)=> (
  <Stack flex={1} minWidth={{xs:'100%', sm:300 }} gap={1.5} direction='row'>
    {icon}
    <Typography fontSize={13} color="#808191">{name}</Typography>
  </Stack>
)

const PeopleCard = ({id,name,email,avatar,noOfAdventures}:PeopleCardProp) => {
  const {data:currentUser}=useGetIdentity();

  const generateLink=()=> {
    if(currentUser.email===email) return '/my-profile'

    return `/users/show/${id}`;
  }
  
  return (
    <Box component={Link}
    to={generateLink()}
    width="100%"
    sx={{
      display:'flex',
      flexDirection: {xs:"column",sm: "row"},
      gap:'19px',
      padding: '19px',
      '&:hover':{
        boxShadow: '0 22px 45px 2px rgba(176,176,176,0.1)'
      }
    }}
    
    > 
    <img
      src={avatar}
      alt="user"
      width={90}
      height={90}
      style={{borderRadius:8,objectFit:'cover'}}
    />
    <Stack direction="column" justifyContent="space-between" flex={1} gap={{xs:4, sm:2}}>
      <Stack gap={2} direction="row" flexWrap="wrap" alignItems="center">
        <Typography fontSize={21} fontWeight={590} color="#11142d">{name}</Typography>
        <Typography fontSize={14} color="#808191">Level 3 Adventurer</Typography>
      </Stack>
      <Stack direction="row" flexWrap="wrap" justifyContent="space-between" alignItems="center" gap={2}>
          <InfoBar
          icon= {<EmailOutlined sx={{color:'#808191'}}/>}
          name={email} />
          <InfoBar
          icon= {<Place sx={{color:'#808191'}}/>}
          name="Suceava" />
          <InfoBar
          icon= {<Phone sx={{color:'#808191'}}/>}
          name="+40 763 110 100" />
          <InfoBar
          icon= {<LocalActivityIcon sx={{color:'#808191'}}/>}
          name={`${noOfAdventures} Adventures`}/>
      </Stack>
    </Stack>

    </Box>
  )
}

export default PeopleCard