import styles from "../main/main.module.css";
import { useEffect } from "react";
import { Product } from "../products/product";
import { getProducts } from "../../service/fetcher";
import { useParams } from "react-router-dom";
import SortBar from "../sortBar/sortBar";

export const CategoryMove = ({ convertPrice, products, setProducts }) => {
    let params = useParams();
    let category = params.n;
    
    useEffect(() => {
      getProducts().then((data) => {
        setProducts(data.data.products);
      });
    }, [setProducts]);

    return (
      <>
        <p></p>
        <div className={styles.filter}>
          <SortBar products={products} setProducts={setProducts}></SortBar>
        </div>
        <main className={styles.flex_wrap}>
          {products.map((product) => {
              if(product.category === category)
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