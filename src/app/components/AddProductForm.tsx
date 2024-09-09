 "use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/inventorySlice';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const categories = ['laptop', 'electronic', 'mobile']; // Define your categories here

interface AddProductFormProps {
  onClose: () => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ onClose }) => {
  const [name, setName] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(0);
  const [category, setCategory] = useState<string>(categories[0]); // Default to the first category
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate that name is at least 3 characters long
    if (name.length < 3) {
      toast.error('Product name must be at least 3 characters long!');
      return;
    }

    // Validate that quantity is greater than zero
    if (quantity <= 0) {
      toast.error('Quantity must be greater than zero!');
      return;
    }

    try {
      dispatch(addProduct({ id: uuidv4(), name, quantity, category })); // Include category
      toast.success('Product added successfully!');
      setName('');
      setQuantity(0);
      setCategory(categories[0]); // Reset category to default
    } catch (error) {
      toast.error('Failed to add product.');
    }
  };

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(isNaN(value) ? 0 : value);
  };

  return (
    <div className="relative bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
      <button
        type="button"
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
          <input
            id="productName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            id="productCategory"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="productQuantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
          <input
            id="productQuantity"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            placeholder="Enter quantity"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
        >
          Add Product
        </button>
        <button
          type="button"
          onClick={onClose}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;


