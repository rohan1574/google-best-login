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
      <div className="bg-red-200 h-32 w-[300px] overflow-hidden shadow-xl shadow-purple-500">
        <h1 className="mb-6 bg-sky-400 py-3 text-white font-bold"> Inventory Management  </h1>
        <h1 className="move-in-and-out text-2xl font-bold"> Inventory Management  </h1>
      </div>

      <div className="bg-white border-2 shadow-xl shadow-purple-500 ">
        <h1 className="mb-6 bg-sky-400 py-3 text-white font-bold "> Dashboard Management  </h1>

       <div className="flex p-3 gap-4">
       <div className="flex items-center ">
      
      <button
        onClick={onToggleForm}
        className="btn "
        aria-label="Toggle product form"
      >
        <div className="flex items-center gap-2"><h1>Products</h1> <School /></div>
        <h1 className="text-xl font-semibold ">{productCount}</h1>
      </button>
      
    </div>

    <div className="flex flex-col md:flex-row gap-2">
      <button
        onClick={() => onCategorySelect("all")}
        className="btn"
        aria-label="Select all categories"
      >
        All
      </button>
      <button
        onClick={() => onCategorySelect("laptop")}
        className="btn"
        aria-label="Select laptop category"
      >
        Laptop
      </button>
      <button
        onClick={() => onCategorySelect("electronic")}
        className="btn"
        aria-label="Select electronic category"
      >
        Electronic
      </button>
      <button
        onClick={() => onCategorySelect("mobile")}
        className="btn"
        aria-label="Select mobile category"
      >
        Mobile
      </button>
    </div>
       </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
