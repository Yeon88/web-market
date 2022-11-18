import styles from "./main.module.css";
import { useEffect } from "react";
import { EventBanner } from "../eventBanner/eventBanner";
import { Product } from "../products/product";
import { getProducts } from "../../service/fetcher";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import React, { useState } from 'react';

export const Main = ({ convertPrice, products, setProducts }) => {

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: '최신', value: '1', state: "recent" },
    { name: '낮은 가격', value: '2', state: "row" },
    { name: '높은 가격', value: '3', state: "high" },
  ];

  const sortProduct = (type) => {
    if (type === "recent") {
      const newProduct = [...products];
      newProduct.sort((a, b) => a.id - b.id);
      setProducts(newProduct);
    } else if (type === "row") {
      const newProduct = [...products];
      newProduct.sort((a, b) => a.price - b.price);
      setProducts(newProduct);
    } else if (type === "high") {
      const newProduct = [...products];
      newProduct.sort((a, b) => b.price - a.price);
      setProducts(newProduct);
    }
  };

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.data.products);
    });
  }, [setProducts]);
  return (
    <>

      <EventBanner />
      <div className={styles.filter}>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant='outline-primary'
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            onClick={()=>sortProduct(radio.state)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
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
