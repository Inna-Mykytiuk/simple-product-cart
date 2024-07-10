import ProductCart from "../components/ProductCart";
import { products } from "../data/products";

export default function Home() {
  return (
    <section>
      <div className="container">
        <h1 className="text-3xl text-center mb-6">List Products</h1>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5">
          {products.map((product, key) => (
            <ProductCart key={key} data={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
