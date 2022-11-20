import styles from "./topNavigationBar.module.css";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ShowName from "../showname/showname";

export const TopNavigationBar = ({ cart }) => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
      <div className={styles.logo}>
        <Link to="/">
          
            <img src="/images/logo.png" alt="logo" />
          
        </Link>
        </div>
      </div>

       <div className={styles.menu}>
       <ShowName />
       </div>

      <div className={styles.menu}>
        <Link to="/cart">
          <div className={styles.shopping_cart}>
            <img src="/images/icon-shopping-cart.svg" alt="cart" /> 
            <span>장바구니</span>
            {cart.length >= 1 ? (
              <div className={styles.new_shopping_cart}>
                <p>{cart.length}</p>
                
              </div>
            ) : (
              ""
            )}
          </div>
        </Link>


        


      </div>
    </header>
  );
};
