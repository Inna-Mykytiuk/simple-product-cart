import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { toggleStatusTab } from "../store/cart";

interface RootState {
  cart: {
    cartItems: Array<{
      id: number;
      name: string;
      price: number;
      image: string;
      slug: string;
      quantity: number;
    }>;
  };
}

export default function Header() {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store: RootState) => store.cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <header className="w-full py-8">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold">
            Home
          </Link>
          <div
            onClick={handleOpenTabCart}
            className="flex justify-center items-center relative w-10 h-10 bg-gray-100 rounded-full"
          >
            <IoCartOutline className="text-2xl" />
            <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
              {totalQuantity}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
