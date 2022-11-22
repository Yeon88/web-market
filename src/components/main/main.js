import styles from "./main.module.css";
import { useEffect } from "react";
import { EventBanner } from "../eventBanner/eventBanner";
import { Product } from "../products/product";
import { getProducts } from "../../service/fetcher";
import SortBar from "../sortBar/sortBar";

export const Main = ({ convertPrice, products, setProducts }) => {
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.data.products);
    });
  }, [setProducts]);
  return (
    <>
      <EventBanner />
      <div className={styles.filter}>
        <SortBar products={products} setProducts={setProducts}></SortBar>
      </div>

      <main className={styles.flex_wrap}>
        {products.map((product) => {
          return (
            <Product
              key={`key-${product.id}`}
              product={product}
              convertPrice={convertPrice}
            />
          );
        })}
      </main>
    </>
  );
};
