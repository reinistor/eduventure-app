import { useList } from "@pankod/refine-core";
import { Box, Typography } from "@pankod/refine-mui";

import { PeopleCard } from "components";

const People = () => {
 
  const {data,isLoading,isError} =useList({resource: 'users',});
  
  const allUsers = data?.data ?? [];

  if(isLoading) return <div>Loading..</div>
  if(isError) return <div>Error..</div>
  return(
    <Box>
      <Typography fontSize={24} fontWeight={650} color="#11142d">People</Typography>
      
      <Box mt="19px" sx={{display:'flex',flexWrap:'wrap',gap:'19px',backgroundColor: '#fcfcfc'}}>
        {allUsers.map((user)=> (
          <PeopleCard
          key={user.id}
          id={user._id}
          name={user.name}
          email={user.email}
          avatar={user.avatar}
          noOfAdventures={user.allAdventures.length}
          />
        ))}
      </Box>
    </Box>
  )
}

export default People