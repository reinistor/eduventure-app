import {useList} from '@pankod/refine-core';
import {Typography, Box, Stack} from '@pankod/refine-mui';
import {
  PieChart,
  AdventureReferral,
  TotalPoints,
  AdventureCard,
  EduRanking
} from 'components'
import React from 'react'

const Home = () => {
  const {data,isLoading,isError} =useList({
    resource:'adventures',
    config: {
      pagination: {
        pageSize: 4
      }
    }
  })
  const latestAdventures = data?.data ?? [];// if we dont have data make it empty array
  if(isLoading) return <Typography>Loading..</Typography>
  if(isError) return <Typography>Error..</Typography>

  return (
    <Box>
      <Typography fontSize={24} fontWeight={650} color="#11142D">
        Dashboard
      </Typography>
      <Box mt="19px" display="flex" flexWrap="wrap" gap={3}>
          <PieChart
          title="Internships"
          value={84}
          series={[80,20]}
          colors={['#455be8','#e4a8af']}
          />
          <PieChart
          title="Competitions and Challenges"
          value={150}
          series={[70,30]}
          colors={['#455be8','#e4a8af']}
          />
          <PieChart
          title="Projects"
          value={119}
          series={[80,20]}
          colors={['#455be8','#e4a8af']}
          />
          <PieChart
          title="User Activity"
          value={696}
          series={[65,35]}
          colors={['#455be8','#e4a8af']}
          />
      </Box>
      <Stack mt="26px" width="100%" direction={{xs:'column',lg:'row'}} gap={5}>
        <TotalPoints></TotalPoints>
        <AdventureReferral></AdventureReferral>
      </Stack>

      <Box flex={1} borderRadius="14px" padding="20px" bgcolor="#fcfcfc" display="flex" flexDirection="column" minWidth="100%" mt="25px">
        <Typography fontSize="17px" fontWeight={590} color="#11142d">Latest Projects</Typography>
        <Box mt={2.5} sx={{display:'flex' ,flexWrap:'wrap', gap:4}}>
          {latestAdventures.map((adventure)=> (
            <AdventureCard
            key={adventure._id}
            id={adventure._id}
            title={adventure.title}
            location={adventure.location}
            points={adventure.points}
            photo={adventure.photo}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Home