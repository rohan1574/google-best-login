import React from 'react';
import LineChart from '../components/LineChart'; // Adjust the path as needed

const LineChartPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Line Chart</h1>
      <LineChart />
    </div>
  );
};

export default LineChartPage;
