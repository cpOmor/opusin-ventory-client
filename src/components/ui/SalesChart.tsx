import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useGetSellCollectionsQuery } from "../../redux/features/order/orderApi";

const salesData = [
  { date: "2023-04-01", amount: 10 },
  { date: "2023-05-01", amount: 15 },
  { date: "2023-06-01", amount: 200 },
  { date: "2023-07-01", amount: 120 },
  { date: "2023-08-01", amount: 180 },
  { date: "2023-09-01", amount: 250 },
  { date: "2023-10-01", amount: 300 },
  { date: "2023-11-01", amount: 0 },
  { date: "2023-12-01", amount: 180 },
  { date: "2024-01-01", amount: 220 },
  { date: "2014-01-01", amount: 10 },
  { date: "2015-01-01", amount: 10 },
  { date: "2016-01-01", amount: 20 },
  { date: "2017-01-01", amount: 120 },
  { date: "2018-01-01", amount: 180 },
  { date: "2019-01-01", amount: 250 },
  { date: "2020-01-01", amount: 300 },
  { date: "2021-01-01", amount: 200 },
  { date: "2022-01-01", amount: 180 },
  { date: "2023-01-01", amount: 220 },
];

const SalesChart: React.FC = () => {
  const data = useGetSellCollectionsQuery(undefined);
  console.log(data?.data?.data, "file name : SalesChart line number : +-30");
  const [chartData, setChartData] = useState(salesData);
  useEffect(() => {
    updateChart();
  }, []);

  const updateChart = () => {
    const filteredData = salesData;

    // Update chart data
    setChartData(filteredData);
  };

  // Options for ApexCharts
  // const chartOptions = {
  //   chart: {
  //     type: "line",
  //   },
  //   xaxis: {
  //     type: "datetime",
  //   },
  // };

  return (
    <div className="h-[600px] w-[80%]">
      <label htmlFor="timeRange">Select Time Range:</label>
      <select id="timeRange" onChange={updateChart}>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>

      <Chart
        // options={chartOptions}
        series={[
          {
            name: "Sales Amount",
            data: chartData.map((item) => ({
              x: new Date(item.date).getTime(),
              y: item.amount,
            })),
          },
        ]}
        type="bar"
      />
    </div>
  );
};

export default SalesChart;
