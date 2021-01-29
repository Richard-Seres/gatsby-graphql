import React from "react"
import { Link } from "gatsby"
import { Carousel } from 'react-bootstrap'
import HeaderMain from "../components/headerMain/headerMain"
import FooterMain from "../components/footerMain/footerMain"
import styles from "./index.module.css"
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import urban from "../content/assets/urban.jpg"
import wedding from "../content/assets/wedding.jpg"
import art from "../content/assets/art.jpg"

{/* CONTENT */}
{/* Illreal home page content */}
{/*
===================================================
  1. Home page function
===================================================
  2. Header component
===================================================
  3. Portfolio links, Carousel & Social links
    3.1. Portfolio categories
    3.2. Carousel
      3.3. Urban
      3.4. Wedding
      3.5. Art
    3.6. Floating Social Media Bar
      3.7. Facebook
      3.8. Instagram
===================================================
  4. Footer
====================================================
*/}

{/* 1. Home page function */}
export default function Home() {
  return (
  <main className={styles.index}>
    {/* 2. Header component */}
    <HeaderMain />
    
    {/* 3. Portfolio links, Carousel & Social */}
    <section>

      {/* 3.1. Portfolio categories */ }
      <article className={styles.article}>
        <div className="container">
          <h1>
            <font className={styles.font}>
              <Link to="/portfolio/urban">Urban</Link>
              <p style={{color: `white`}}> - </p>
              <Link to="/portfolio/wedding">Wedding</Link>
              <p style={{color: `white`}}> - </p>
              <Link to="/portfolio/art">Art</Link>
            </font>
          </h1>
        </div>
      </article>

      {/* 3.2. Carousel */ }
      <div>
        <Carousel className={styles.carousel}>
          <Carousel.Item> {/* Urban */}
              <img className={styles.img} src={urban} alt="urban" />
            <Carousel.Caption className={styles.carouselCaption}>
              <Link to="/portfolio/urban">Urban</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item> {/* Wedding */}
              <img className={styles.img} src={wedding} alt="wedding" />
            <Carousel.Caption className={styles.carouselCaption}>
              <Link to="/portfolio/wedding">Wedding</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item> {/* Art */}
              <img className={styles.img} src={art} alt="art" />
            <Carousel.Caption className={styles.carouselCaption}>
              <Link to="/portfolio/art">Art</Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* 3.6. Floating Social Media Bar */}
      <div className="float-sm-right">
        {/* 3.7. Facebook */}
        <div className={`${styles.flFl} ${styles.floatFb}`}>
          <a href="https://www.facebook.com/IllrealPresents/posts/3597922013602149" target="_blank"><p>Like me!</p> <FaFacebookSquare className={styles.floatSocial}/>
          </a>
        </div>
        {/* 3.8. Instagram */}
        <div className={`${styles.flFl} ${styles.floatIg}`}>
          <a href="https://www.instagram.com/illrealpresents/?hl=hu" target="_blank"><p>Follow me!</p><FaInstagram className={styles.floatSocial}/>
          </a>
        </div>
      </div>

    </section>

    <FooterMain />
  </main>
  );
}