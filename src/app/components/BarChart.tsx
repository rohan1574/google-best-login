"use client"; // Ensure this is a Client Component

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const products = useSelector((state: RootState) => state.inventory.products);

  const data = {
    labels: products.map(product => product.name),
    datasets: [
      {
        label: 'Product Quantity',
        data: products.map(product => product.quantity),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={{ responsive: true }} />
    </div>
  );
};

export default BarChart;
