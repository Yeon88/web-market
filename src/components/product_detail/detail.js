import styles from "./detail.module.css";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../service/fetcher";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {
  TransformComponent,
  TransformWrapper,
} from "@pronestor/react-zoom-pan-pinch";
import Posts from "../Post/Post";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";



export const Detail = ({ convertPrice, cart, setCart }) => {

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true);
    handleCart();
  }

  const handleQuantity = (type) => {
    if (type === "plus") {
      setCount(count + 1);
    } else {
      if (count === 1) return;
      setCount(count - 1);
    }
  };
  
  const setQuantity = (id, quantity) => {
    const found = cart.filter((el) => el.id === id)[0];
    const idx = cart.indexOf(found);
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      quantity: quantity,
      price: product.price,
      provider: product.provider,
    };
    setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
  };

  const handleCart = () => {
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      quantity: count,
      price: product.price,
      provider: product.provider,
    };
    const found = cart.find((el) => el.id === cartItem.id);
    if (found) setQuantity(cartItem.id, found.quantity + count);
    else setCart([...cart, cartItem]);
  };

  useEffect(() => {
    getProducts().then((data) => {
      setProduct(
        data.data.products.find((product) => product.id === parseInt(id))
      );
    });
  }, [id, product.price]);
  const level = product.stock> 35 ? "success" : "danger";
  return (
    product && (
      <>
        <main className={styles.main}>
          <section className={styles.product}>
            <div className={styles.product_img}>
              <TransformWrapper>
              <TransformComponent>
              <img src={product.image} alt="product" />
              </TransformComponent>
              </TransformWrapper>
            </div>
          </section>
          <section className={styles.product}>
            <div className={styles.product_info}>
              <p className={styles.seller_store}>{product.provider}</p>
              <p className={styles.product_name}>{product.name}</p>
              <span className={styles.price}>
                {convertPrice(product.price + "")}
                <span className={styles.unit}>???</span>
              </span>
            </div>

            <div className={styles.product_stock}>
            <p>????????????</p>
            <ProgressBar animated variant={level} now={product.stock/120*100} />
            </div>
            <div className={styles.delivery}>
              <p>???????????? / ????????????</p>
            </div>

            <div className={styles.line}></div>

            <div className={styles.amount}>
              <img
                className={styles.minus}
                src="/images/icon-minus-line.svg"
                alt="minus"
                onClick={() => handleQuantity("minus")}
              />

              <div className={styles.count}>
                <span>{count}</span>
              </div>

              <img
                className={styles.plus}
                src="/images/icon-plus-line.svg"
                alt="plus"
                onClick={() => handleQuantity("plus")}
              />
            </div>

            <div className={styles.line}></div>

            <div className={styles.sum}>
              <div>
                <span className={styles.sum_price}>??? ?????? ??????</span>
              </div>

              <div className={styles.total_info}>
                <span className={styles.total}>
                  ??? ?????? <span className={styles.total_count}>{count}???</span>
                </span>
                <span className={styles.total_price}>
                  {convertPrice(product.price * count)}
                  <span className={styles.total_unit}>???</span>
                </span>
              </div>
            </div>

            <div className={styles.btn}>
              <button
                className={styles.btn_cart}
                onClick={handleShow}
              >
                ????????????
              </button>
            </div>
          </section>
        </main>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>???????????? ??????</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.cartAlarm}><CircularProgressBar
  colorCircle="#e6e6e6"
  colorSlice="#000"
  number={false}
  percent={100}
/>
<p>???????????? ?????? ??????!</p></div>
</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            ??????
          </Button>
        </Modal.Footer>
      </Modal>
        <div className={styles.newEtc}>
        <section className={styles.etc}>
          <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
      fill
    >
        <Tab eventKey="home" title="?????? ????????????">
          <div>
          <Posts />
          </div>
        </Tab>
        <Tab eventKey="profile" title="?????? ?????????">
          <div className={styles.review}>
          <CircularProgressBar
            colorCircle="#e6e6e6"
            colorSlice="#ff1313"
            number={true}
            percent={product.review5p/product.totalReview*100}
          > 
          <div style={{ fontSize: "22px",textAlign: "center", padding: "0 35px" }}>
              ????????????
            </div>
          </CircularProgressBar>
          <CircularProgressBar
            colorCircle="#e6e6e6"
            colorSlice="#000"
            number={true}
            percent={product.review4p/product.totalReview*100}
          >
            <div style={{ fontSize: "22px",textAlign: "center", padding: "0 35px" }}>
              ??????
            </div>
          </CircularProgressBar>
          <CircularProgressBar
            colorCircle="#e6e6e6"
            colorSlice="#000"
            number={true}
            percent={product.review3p/product.totalReview*100}
          >
            <div style={{ fontSize: "22px",textAlign: "center", padding: "0 35px" }}>
              ??????
            </div>
          </CircularProgressBar>
          <CircularProgressBar
            colorCircle="#e6e6e6"
            colorSlice="#000"
            number={true}
            percent={product.review2p/product.totalReview*100}
          >
            <div style={{ fontSize: "22px",textAlign: "center", padding: "0 35px" }}>
              ??? ??????
            </div>
          </CircularProgressBar>
          <CircularProgressBar
            colorCircle="#e6e6e6"
            colorSlice="#000"
            number={true}
            percent={product.review1p/product.totalReview*100}
          >
            <div style={{ fontSize: "22px", textAlign: "center", padding: "0 35px" }}>
              ?????? ?????????
            </div>
          </CircularProgressBar>
          </div>
        </Tab>
        </Tabs>

          </section>
        </div>
      </>
    )
  );
};
