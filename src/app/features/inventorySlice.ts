// src/features/inventorySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of a product
interface Product {
  id: string;
  name: string;
  quantity: number;
  category: string;
}

// Define the shape of the slice state
interface InventoryState {
  products: Product[];
  notifications: string[];
}

// Define the initial state of the slice
const initialState: InventoryState = {
  products: [],
  notifications: [],
};

// Create the slice
const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    // Add a new product to the state
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    // Update an existing product in the state
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    // Delete a product from the state
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    // Check inventory and update notifications for low stock
    checkInventory: (state) => {
      state.notifications = state.products
        .filter(product => product.quantity <= 5) // Example threshold for low stock
        .map(product => `Low stock for product: ${product.name}`);
    },
  },
});

// Export actions and reducer
export const { addProduct, updateProduct, deleteProduct, checkInventory } = inventorySlice.actions;
export default inventorySlice.reducer;
