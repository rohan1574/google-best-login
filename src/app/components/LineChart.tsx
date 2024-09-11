"use client";

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
  const products = useSelector((state: RootState) => state.inventory.products);

  const data = {
    labels: products.map((product) => product.name),
    datasets: [
      {
        label: 'Product Quantity',
        data: products.map((product) => product.quantity),
        borderColor: '#42A5F5', // Line color
        backgroundColor: 'rgba(66, 165, 245, 0.2)', // Fill color under the line
        fill: true, // Enable fill under the line
        pointBackgroundColor: '#42A5F5', // Point color
        tension: 0.4, // Smooth curves
      },
    ],
  };

  return (
    <div className="chart-container h-full">
      <Line
        className="bg-white p-4 shadow-md rounded-lg"
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false, // Ensures the line chart is responsive
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              enabled: true,
            },
          },
          scales: {
            x: {
              grid: {
                display: false, // Remove grid lines on x-axis
              },
            },
            y: {
              grid: {
                color: 'rgba(200, 200, 200, 0.2)', // Light grid lines on y-axis
              },
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
