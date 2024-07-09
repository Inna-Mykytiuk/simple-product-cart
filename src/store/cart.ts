import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Інтерфейс для елементів у кошику
interface CartItem {
  productId: number;
  quantity: number;
}

// Інтерфейс для стану кошика
interface CartState {
  cartItems: CartItem[];
}

// Початковий стан з типом
const initialState: CartState = {
  cartItems: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { productId, quantity } = action.payload;
      const indexProductId = state.cartItems.findIndex(item => item.productId === productId);
      if (indexProductId >= 0) {
        state.cartItems[indexProductId].quantity += quantity;
      } else {
        state.cartItems.push({ productId, quantity });
      }
      
    }
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
