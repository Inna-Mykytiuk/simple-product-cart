import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import { addToCart } from "../store/cart";

interface ProductCartProps {
  data: {
    id: number;
    name: string;
    price: number;
    image: string;
    slug: string;
  };
}

interface RootState {
  cart: {
    cartItems: Array<{
      id: number;
      name: string;
      price: number;
      image: string;
      slug: string;
    }>;
  };
}

const ProductCart: React.FC<ProductCartProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const carts = useSelector((store: RootState) => store.cart.cartItems);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };

  const { id, name, price, image, slug } = props.data;
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm flex flex-col justify-between">
      <div>
        <Link to={slug}>
          <img
            src={image}
            alt={name}
            className="w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007] hover:scale-105 transition-all ease-out duration-300"
          />
        </Link>
        <h3 className="text-2xl py-3 text-center font-medium">{name}</h3>
      </div>
      <div className="flex justify-between items-center w-full">
        <p className="text-2xl font-medium">
          $<span className="text-xl font-medium">{price}</span>
        </p>
        <button
          onClick={handleAddToCart}
          className="bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2 items-center transition-all ease-out duration-300"
          aria-label="Add to cart"
        >
          <IoCartOutline className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
