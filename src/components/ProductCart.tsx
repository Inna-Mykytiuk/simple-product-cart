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
  // console.log(carts);

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
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <Link to={slug}>
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]"
        />
      </Link>
      <div className="flex flex-col justify-between items-center">
        <h3 className="text-2xl py-3 text-center font-medium">{name}</h3>
        <div className="flex justify-between items-center">
          <p>
            $<span className="text-2xl font-medium">{price}</span>
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2 items-center"
          >
            <IoCartOutline className="text-2xl" />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
