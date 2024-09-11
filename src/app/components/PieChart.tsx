"use client";

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const products = useSelector((state: RootState) => state.inventory.products);

  const data = {
    labels: products.map(product => product.name),
    datasets: [
      {
        data: products.map(product => product.quantity),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Example colors
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="chart-container h-full">
      <Pie
        className="bg-white p-4 shadow-md rounded-lg"
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false, // Ensures the pie chart is responsive
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              enabled: true,
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
