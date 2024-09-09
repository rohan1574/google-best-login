import React from 'react';
import PieChart from '../components/PieChart'; // Adjust the path as needed

const PieChartPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pie Chart</h1>
      <PieChart />
    </div>
  );
};

export default PieChartPage;
