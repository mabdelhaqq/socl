import "./Chart.scss";
import ReactApexChart from 'react-apexcharts';

const Chart = () => {
  const chartData = {
    options: {
      labels: ['Verified Users', 'Not Verified Users'],
      colors: ['#6D3DDA', '#FF5733'],
      dataLabels: {
        enabled: true,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
    series: [60, 40],
  };

  return (
    <div className="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="pie" width="100%"/>
    </div>
  );
};

export default Chart;
