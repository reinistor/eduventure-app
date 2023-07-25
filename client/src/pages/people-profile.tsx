import { useOne } from "@pankod/refine-core";

import { useParams } from "@pankod/refine-react-router-v6";

import { Profile } from "components";


const PeopleProfile = () => {
  const {id}=useParams();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: id as string
});

console.log(data);
  const PeopleProfile=data?.data ?? [];

  if(isLoading) return <div>Loading..</div>
  if(isError) return <div>Error..</div>
  return (
    <Profile
      type="User "
      name={PeopleProfile.name}
      email={PeopleProfile.email}
      avatar={PeopleProfile.avatar}
      adventures={PeopleProfile.allAdventures}
    />
  )
}

export default PeopleProfile
