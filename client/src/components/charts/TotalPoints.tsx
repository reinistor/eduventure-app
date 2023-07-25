import React from 'react'
import ReactApexChart from 'react-apexcharts';
import {Box, Typography, Stack, color, minHeight} from '@pankod/refine-mui';
import {KeyboardDoubleArrowUpOutlined} from '@mui/icons-material';

import { TotalPointsSeries, TotalPointsOptions } from './chart.config';
const TotalPoints = () => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor= "#fcfcfc"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="14px"
      >
        <Typography fontSize={18} fontWeight={550} color="#11142d">
          Points
        </Typography>
        <Stack my="19px" direction="row" gap={3} flexWrap="wrap">
          <Typography fontSize={26} fontWeight={690} color="#11142d">132.342 EduPoints</Typography>
          <Stack direction="row" alignContent="center" gap={1}>
            <KeyboardDoubleArrowUpOutlined sx={{fontSize: 25,color: '#475be8'}}/>
            <Stack>
              <Typography fontSize={14} color='#475be8'>
                1.9%
              </Typography>
              <Typography fontSize={11} color='#808191'>
                Than last month
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <ReactApexChart 
        series={TotalPointsSeries}
        type="bar"
        height={305}
        options={TotalPointsOptions}/>
    </Box>
  )
}

export default TotalPoints