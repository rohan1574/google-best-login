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
    labels: products.map(product => product.name),
    datasets: [
      {
        label: 'Product Quantity',
        data: products.map(product => product.quantity),
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66, 165, 245, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Line data={data} options={{ responsive: true }} />
    </div>
  );
};

export default LineChart;
