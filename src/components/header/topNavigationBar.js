import styles from "./topNavigationBar.module.css";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ShowName from "../showname/showname";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
export const TopNavigationBar = ({ cart }) => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/">
          <h1 className={styles.logo}>
            <img src="/images/logo.png" alt="logo" />
          </h1>
        </Link>
      </div>

      <div className={styles.menu}>
      <Form className="d-flex">
      <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
        </Form>
       </div>

       <ShowName />

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


       
          <div className={styles.mypage}>
            <img src="/images/icon-user.svg" alt="user" />
            <span>로그인</span>
          </div>
        


      </div>
    </header>
  );
};
