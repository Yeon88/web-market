import Carousel from 'react-bootstrap/Carousel';
import styles from "./eventBanner.module.css";

export const EventBanner = () => {

  return (
     <Carousel fade>
      <Carousel.Item>
        <img
          className={styles.banner}
          src="images/banner01.png"
          alt="First slide"
        />
        <div className={styles.right}>
        <img src="images/icon-swiper-2.svg" alt="right" />
      </div>
      <div className={styles.left}>
        <img src="images/icon-swiper-1.svg" alt="left" />
      </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.banner}
          src="images/banner02.png"
          alt="Second slide"
        />
        <div className={styles.right}>
        <img src="images/icon-swiper-2.svg" alt="right" />
      </div>
      <div className={styles.left}>
        <img src="images/icon-swiper-1.svg" alt="left" />
      </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.banner}
          src="images/banner03.png"
          alt="Third slide"
        />
        <div className={styles.right}>
        <img src="images/icon-swiper-2.svg" alt="right" />
      </div>
      <div className={styles.left}>
        <img src="images/icon-swiper-1.svg" alt="left" />
      </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.banner}
          src="images/banner04.png"
          alt="First slide"
        />
        <div className={styles.right}>
        <img src="images/icon-swiper-2.svg" alt="right" />
      </div>
      <div className={styles.left}>
        <img src="images/icon-swiper-1.svg" alt="left" />
      </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.banner}
          src="images/banner05.png"
          alt="First slide"
        />
        <div className={styles.right}>
        <img src="images/icon-swiper-2.svg" alt="right" />
      </div>
      <div className={styles.left}>
        <img src="images/icon-swiper-1.svg" alt="left" />
      </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.banner}
          src="images/banner06.png"
          alt="First slide"
        />
        <div className={styles.right}>
        <img src="images/icon-swiper-2.svg" alt="right" />
      </div>
      <div className={styles.left}>
        <img src="images/icon-swiper-1.svg" alt="left" />
      </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.banner}
          src="images/banner07.png"
          alt="First slide"
        />
        <div className={styles.right}>
        <img src="images/icon-swiper-2.svg" alt="right" />
      </div>
      <div className={styles.left}>
        <img src="images/icon-swiper-1.svg" alt="left" />
      </div>
      </Carousel.Item>
    </Carousel>
  );


};