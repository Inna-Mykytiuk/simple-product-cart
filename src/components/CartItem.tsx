import { useState, useEffect } from "react";
import { products } from "../data/products";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../store/cart";
import { ProductItemProps } from "../types/types";
import { ProductProps } from "../types/types";

interface ProductCartProps {
  data: ProductProps;
}

const CartItem: React.FC<ProductCartProps> = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState<ProductItemProps | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.find((product) => product.id === productId);
    if (findDetail) {
      setDetail(findDetail);
    }
  }, [productId]);

  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };

  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  if (!detail) {
    return null;
  }

  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
      <img src={detail.image} alt="" className="w-12" />
      <h3>{detail.name}</h3>
      <p>${detail.price * quantity}</p>
      <div className="w-20 flex justify-between gap-2">
        <button
          type="button"
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          type="button"
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={handlePlusQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
