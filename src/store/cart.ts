import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Інтерфейс для елементів у кошику
interface CartItem {
  productId: number;
  quantity: number;
}

// Інтерфейс для стану кошика
interface CartState {
  cartItems: CartItem[];
  statusTab?: boolean; // Додано статус для вкладки
}

// Початковий стан з типом
const initialState: CartState = {
  cartItems: [],
  statusTab: false, // Додано початковий статус для вкладки
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
    },
    changeQuantity(state, action){
            const {productId, quantity} = action.payload;
            const indexProductId = (state.cartItems).findIndex(item => item.productId === productId);
            if(quantity > 0){
                state.cartItems[indexProductId].quantity = quantity;
            }else{
                state.cartItems = (state.cartItems).filter(item => item.productId !== productId);
            }
            localStorage.setItem("carts", JSON.stringify(state.cartItems));
    },
     toggleStatusTab(state){
            if(state.statusTab === false){
                state.statusTab = true;
            }else{
                state.statusTab = false;
            }
        }
  },
});

export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;

export default cartSlice.reducer;
