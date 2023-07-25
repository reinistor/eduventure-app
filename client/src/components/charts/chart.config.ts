import { ApexOptions } from 'apexcharts';

export const TotalPointsSeries = [
  {
    name: 'Last Month',
    data: [123, 134, 105, 95, 153, 153, 99],
  },
  {
    name: 'Running Month',
    data: [99, 81, 70, 41, 105, 105, 50],
  },
];

export const TotalPointsOptions: ApexOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: ['#475BE8', '#CFC8FF'],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: '55%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ['transparent'],
    width: 4,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
  yaxis: {
    title: {
      text: 'Points',
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
  },
  tooltip: {
    y: {
      formatter(val: number) {
        return ` ${val} Points`;
      },
    },
  },
};