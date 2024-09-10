import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// Define the Product type
export interface Product {
  id: string;
  name: string;
  category: string;
  quantity: number;
  dateAdded: string; // Include dateAdded property
}

// Define the initial state type
interface InventoryState {
  products: Product[];
}

// Define the initial state
const initialState: InventoryState = {
  products: [],
};

// Create the inventory slice
const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Omit<Product, 'id' | 'dateAdded'>>) => {
      const newProduct: Product = {
        ...action.payload,
        id: uuidv4(), // Generate a unique ID
        dateAdded: new Date().toLocaleString(), // Set the current date and time
      };
      state.products.push(newProduct);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const { id, name, category, quantity, dateAdded } = action.payload;
      const existingProduct = state.products.find(product => product.id === id);
      if (existingProduct) {
        existingProduct.name = name;
        existingProduct.category = category;
        existingProduct.quantity = quantity;
        existingProduct.dateAdded = dateAdded;
      }
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
  },
});

// Export the actions
export const { addProduct, updateProduct, deleteProduct } = inventorySlice.actions;

// Export the reducer
export default inventorySlice.reducer;