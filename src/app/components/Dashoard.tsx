"use client";

import React from 'react';

interface DashboardProps {
  onToggleForm: () => void;
  productCount: number;
  onCategorySelect: (category: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onToggleForm, productCount, onCategorySelect }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-8">
      <div>
        <p className="text-gray-600">Information</p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:gap-5">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Dashboard</h1>
        <div className="flex items-center mb-4 md:mb-0">
          <button
            onClick={onToggleForm}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Toggle product form"
          >
            Products
          </button>
          <h1 className="text-xl font-semibold ml-4">{productCount}</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <button
            onClick={() => onCategorySelect('all')}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Select all categories"
          >
            All
          </button>
          <button
            onClick={() => onCategorySelect('laptop')}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Select laptop category"
          >
            Laptop
          </button>
          <button
            onClick={() => onCategorySelect('electronic')}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Select electronic category"
          >
            Electronic
          </button>
          <button
            onClick={() => onCategorySelect('mobile')}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Select mobile category"
          >
            Mobile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

