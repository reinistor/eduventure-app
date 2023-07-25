import React from 'react'
import ReactApexChart from 'react-apexcharts';
import {Box, Typography, Stack, color, minHeight} from '@pankod/refine-mui';
import { PieChartProps } from 'interfaces/home';

const PieChart = ({title, value,series,colors}:PieChartProps) => {
  return (
    <Box
    id="chart"
    flex={1}
    display="flex"
    bgcolor="#fcfcfc"
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
    pl={3.4}
    py={1.9}
    gap={1.9}
    borderRadius="14px"
    minHeight="100px"
    width="fit-content"
    >
        <Stack direction="column">
          <Typography fontSize={13} color="#808191">{title}</Typography>
          <Typography fontSize={23} color="#11142d" fontWeight={690} mt={1}>{value}</Typography>
        </Stack>
        <ReactApexChart 
          options={{
            chart: {type: 'donut'},
            colors,
            legend: {show:false},
            dataLabels: {enabled: false},
          }}
          series={series}
          type='donut'
          width="110px"
        />
    </Box>
  )
}

export default PieChart