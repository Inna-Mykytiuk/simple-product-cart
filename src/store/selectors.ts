import { CartState } from './cart';

export const calculateTotal = (state: CartState) => {
  return state.cartItems.reduce((total, item) => total + item.quantity * (item.price || 0), 0);
};