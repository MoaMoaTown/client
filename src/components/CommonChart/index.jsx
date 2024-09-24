import React from 'react';
import Chart from 'react-apexcharts';

const CommonChart = ({ data, xKey, yKey, colors }) => {
  const xValues = data.map((item) => item[xKey]);
  const yValues = data.map((item) => Number(item[yKey]));

  const chartOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false, // 차트 도구 모음 숨기기
      },
    },
    xaxis: {
      categories: xValues,
      labels: {
        show: false, // X축 레이블 숨기기
      },
    },
    colors: colors,
  };

  const chartSeries = [
    {
      name: 'Count',
      data: yValues,
    },
  ];

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type='bar'
      height={240}
    />
  );
};

export default CommonChart;
