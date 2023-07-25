import React from 'react'
import {Box, Stack, Typography, color} from '@pankod/refine-mui';
import { AdventureReferralInfo } from 'constants/index';

interface ProgressBarProps {
  title: string,
  percentage: number,
  color: string,
}

const ProgressBar = ({title, percentage, color}:ProgressBarProps)=> (
  <Box width="100%">
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography fontSize={15} fontWeight={450} color="#11142d">{title}</Typography>
      <Typography fontSize={15} fontWeight={450} color="#11142d">{percentage}%</Typography>
    </Stack>
    <Box mt={2} position="relative" width="100%" height="8px" borderRadius={1} bgcolor="e4e8ef">
          <Box
            width={'${percentage}%'}
            bgcolor={color}
            position="absolute"
            height="100%"
            borderRadius={1}
          />
        </Box>
  </Box>
)

const AdventureReferral = () => {
  return (
    <Box
      p={4}
      bgcolor= "#fcfcfc"
      id="chart"
      minWidth={480}
      display="flex"
      flexDirection="column"
      borderRadius="14px"
      >
        <Typography fontSize={18} fontWeight={550} color="#11142d">
          Adventure Referrals
        </Typography>
        <Stack my="19px" direction="column" gap={3.5}>
          {AdventureReferralInfo.map((bar)=><ProgressBar key={bar.title}{...bar}/>)}
        </Stack>
    </Box>
  )
}

export default AdventureReferral