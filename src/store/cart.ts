import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Інтерфейс для елементів у кошику
interface CartItem {
  productId: number;
  quantity: number;
  price?: number; 
}

// Інтерфейс для стану кошика
export interface CartState {
  cartItems: CartItem[];
  statusTab?: boolean; 
}

// Початковий стан з типом
const initialState: CartState = {
  cartItems: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts") as string) : [],
  statusTab: false, 
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { productId, quantity, price } = action.payload;
      const indexProductId = state.cartItems.findIndex(item => item.productId === productId);
      if (indexProductId >= 0) {
        state.cartItems[indexProductId].quantity += quantity;
      } else {
        state.cartItems.push({ productId, quantity, price });
      }
      localStorage.setItem("carts", JSON.stringify(state.cartItems));
    },
    changeQuantity(state, action: PayloadAction<{ productId: number, quantity: number }>) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.cartItems.findIndex(item => item.productId === productId);
      if (quantity > 0) {
        state.cartItems[indexProductId].quantity = quantity;
      } else {
        state.cartItems = state.cartItems.filter(item => item.productId !== productId);
      }
      localStorage.setItem("carts", JSON.stringify(state.cartItems));
    },
    toggleStatusTab(state) {
      state.statusTab = !state.statusTab;
    }
  },
});

// Селектор для обчислення загальної суми


export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;

export default cartSlice.reducer;
