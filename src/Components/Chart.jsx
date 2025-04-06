import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// 註冊 chart.js 所需的功能
ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export const BarChart = ({ labels, rainData }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "降雨機率 (%)",
        data: rainData,
        backgroundColor: "rgba(75,192,192,0.6)",
      },
    ],
  };

  return <Bar data={chartData} />;
};

export const LineChart = ({ labels, maxTemp, minTemp }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "最高溫 (°C)",
        data: maxTemp,
        borderColor: "rgba(255, 99, 132, 1)",
        tension: 0.4,
      },
      {
        label: "最低溫 (°C)",
        data: minTemp,
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.4,
      },
    ],
  };

  return <Line data={chartData} />;
};
