import ProductCart from "../components/ProductCart";
import { products } from "../data/products";
import { ProductProps } from "../types/types";

export default function Home() {
  const transformedProducts: ProductProps[] = products.map((product) => ({
    ...product,
    productId: product.id,
    quantity: 0, 
  }));

  return (
    <section>
      <div className="container">
        <h1 className="text-3xl text-center mb-6">List Products</h1>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5">
          {transformedProducts.map((product, key) => (
            <ProductCart key={key} data={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
