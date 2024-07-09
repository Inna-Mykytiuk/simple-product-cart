import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";
import { products } from "../data/products";

// Інтерфейс для продукту
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  slug: string;
}

export default function Details() {
  const { slug } = useParams<{ slug: string }>();
  const [detail, setDetail] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.filter((product) => product.slug === slug);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = "/";
    }
  }, [slug]);

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (detail) {
      dispatch(
        addToCart({
          productId: detail.id,
          quantity: quantity,
        })
      );
    }
  };

  return (
    <section>
      <div className="container">
        <h2 className="text-3xl text-center">PRODUCT DETAIL</h2>
        {detail ? (
          <div className="flex flex-col md:flex-row gap-5 mt-5">
            <div className="flex items-center w-full md:w-[70%]">
              <img src={detail.image} alt={detail.name} className="w-full" />
            </div>
            <div className="flex flex-col max-w-full gap-5 md:max-w-[50%]">
              <h1 className="text-4xl uppercase font-bold">{detail.name}</h1>
              <p className="font-bold text-3xl">${detail.price}</p>
              <div className="flex gap-5">
                <div className="flex gap-2 justify-center items-center">
                  <button
                    className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                    onClick={handleMinusQuantity}
                  >
                    -
                  </button>
                  <span className="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">
                    {quantity}
                  </span>
                  <button
                    className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                    onClick={handlePlusQuantity}
                  >
                    +
                  </button>
                </div>
                <button
                  className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl"
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
              <p>{detail.description}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
}
