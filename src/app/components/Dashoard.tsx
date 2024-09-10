"use client";

import { School } from "lucide-react";
import React from "react";

interface DashboardProps {
  onToggleForm: () => void;
  productCount: number;
  onCategorySelect: (category: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  onToggleForm,
  productCount,
  onCategorySelect,
}) => {
  return (
    <div className="flex  justify-between mb-8">
      <div className="bg-red-200 h-32 w-[300px] overflow-hidden">
        <h1 className="mb-6 bg-sky-400 "> Inventory Management  </h1>
        <h1 className="move-in-and-out text-2xl font-bold"> Inventory Management  </h1>
      </div>

      <div className="bg-white  ">
        <h1 className="mb-6 bg-sky-400 "> Inventory Management  </h1>

       <div className="flex p-3 gap-4">
       <div className="flex items-center ">
      
      <button
        onClick={onToggleForm}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Toggle product form"
      >
        <div className="flex items-center gap-2"><h1>Products</h1> <School /></div>
        <h1 className="text-xl font-semibold ">{productCount}</h1>
      </button>
      
    </div>

    <div className="flex flex-col md:flex-row gap-2">
      <button
        onClick={() => onCategorySelect("all")}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        aria-label="Select all categories"
      >
        All
      </button>
      <button
        onClick={() => onCategorySelect("laptop")}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        aria-label="Select laptop category"
      >
        Laptop
      </button>
      <button
        onClick={() => onCategorySelect("electronic")}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        aria-label="Select electronic category"
      >
        Electronic
      </button>
      <button
        onClick={() => onCategorySelect("mobile")}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        aria-label="Select mobile category"
      >
        Mobile
      </button>
    </div>
       </div>
        
      </div>



      {/* <div className="flex flex-col md:flex-row md:items-center md:gap-5 bg-slate-200">
      
        <div className="flex items-center mb-4 md:mb-0 bg-slate-500">
      
          <button
            onClick={onToggleForm}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Toggle product form"
          >
            <div className="flex items-center gap-2"><h1>Products</h1> <School /></div>
            <h1 className="text-xl font-semibold ">{productCount}</h1>
          </button>
          
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <button
            onClick={() => onCategorySelect("all")}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Select all categories"
          >
            All
          </button>
          <button
            onClick={() => onCategorySelect("laptop")}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Select laptop category"
          >
            Laptop
          </button>
          <button
            onClick={() => onCategorySelect("electronic")}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Select electronic category"
          >
            Electronic
          </button>
          <button
            onClick={() => onCategorySelect("mobile")}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Select mobile category"
          >
            Mobile
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
