"use client"; // Ensure this is a Client Component

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const products = useSelector((state: RootState) => state.inventory.products);

  // Define colors to cycle through
  const colors = [
    'rgba(255, 99, 132, 1)', // Red
    'rgba(54, 162, 235, 1)', // Blue
    'rgba(255, 206, 86, 1)', // Yellow
    'rgba(75, 192, 192, 1)', // Green
    'rgba(153, 102, 255, 1)', // Purple
    'rgba(255, 159, 64, 1)', // Orange
  ];

  // Determine bar colors based on the index
  const backgroundColors = products.map((_, index) => colors[index % colors.length]);
  const borderColors = backgroundColors.map(color => color.replace('0.2', '1')); // Adjust opacity for border

  const data = {
    labels: products.map(product => product.name),
    datasets: [
      {
        label: 'Product Quantity',
        data: products.map(product => product.quantity),
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container ">
      <Bar className='bg-red-200 ' data={data} options={{ responsive: true }} />
    </div>
  );
};

export default BarChart;
