// src/app/utils/notificationUtils.ts

import { AppDispatch } from '../store/store'; // Ensure this path is correct
import { checkInventory } from '../features/inventorySlice';

/**
 * Dispatches an action to check inventory and notify about low stock.
 * 
 * @param dispatch - The Redux dispatch function.
 */
export const notifyLowStock = (dispatch: AppDispatch) => {
  dispatch(checkInventory());
};
