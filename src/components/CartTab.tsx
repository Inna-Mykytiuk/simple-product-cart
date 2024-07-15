import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../store/cart";
import { calculateTotal } from "../store/selectors";
import CartItem from "./CartItem";
import { CartItemProps } from "../types/types";

interface RootState {
  cart: {
    cartItems: Array<CartItemProps>;
    statusTab: boolean;
  };
}

const CartTab: React.FC = () => {
  const carts = useSelector((store: RootState) => store.cart.cartItems);
  const statusTab = useSelector((store: RootState) => store.cart.statusTab);
  const totalAmount = useSelector((store: RootState) =>
    calculateTotal(store.cart)
  );
  const dispatch = useDispatch();

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <div
      className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] 
    transform transition-transform duration-500
    ${statusTab === false ? "translate-x-full" : ""}
    `}
    >
      <h2 className="p-5 text-white text-2xl">Shopping Cart</h2>
      <div className=" p-5">
        {carts.length === 0 ? (
          <p className="text-white text-xl text-center">Your cart is empty</p>
        ) : (
          carts.map((item, key) => <CartItem key={key} data={item} />)
        )}
      </div>
      {carts.length > 0 && (
        <div className="p-5 text-white text-2xl">
          Total: ${totalAmount.toFixed(2)}
        </div>
      )}
      <button
        type="button"
        className="bg-black text-white w-full py-4"
        onClick={handleCloseTabCart}
      >
        CLOSE
      </button>
    </div>
  );
};

export default CartTab;
