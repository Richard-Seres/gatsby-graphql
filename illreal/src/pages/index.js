import React from "react"
import { Carousel } from 'react-bootstrap'
import { Link } from "gatsby"
import Footer from "../components/footer"
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import styles from "../styles/new-style.css"
import urban from "../content/assets/urban.jpg"
import wedding from "../content/assets/wedding.jpg"
import art from "../content/assets/art.jpg"

export default function Home() {
  return (
  <main>
    <header class="site-header" role="banner">
      <div class="navbar-wrapper">
        <nav class="navbar navbar-fixed-top noshrink" role="navigation">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Menu Switch</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <Link to="/" class="navbar-brand"><font>Illreal photography</font></Link>
            </div>

            <nav class="navbar-collapse collapse noshrink">
              <ul id="menu-header-menu" class="nav navbar-nav navbar-right">
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link to="/portfolio"><font>Portfolio</font>
                  </Link>
                  <div class="item-sep"> // </div>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link to="/shop"><font>Shop</font>
                  </Link>
                  <div class="item-sep"> // </div>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link to="/introduction"><font>Introduction</font>
                  </Link>
                </li>
              </ul>
            </nav>            
          </div>
        </nav>
      </div>
    </header>

    <section>
      <article>
        <h1>
          <font>
            <Link to="/portfolio/urban"><font>Urban</font>
             </Link>
             <p style={{color: `white`}}> - </p>
            <Link to="/portfolio/wedding"><font>Wedding</font>
            </Link>
            <p style={{color: `white`}}> - </p>
            <Link to="/portfolio/art"><font>Art</font>
          </Link>
          </font>
        </h1>
      </article>

      <div id="myCarousel">
        <Carousel>
          <Carousel.Item>
              <img class="bg-img img-fluid" src={urban} alt="urban" />
            <Carousel.Caption>
                <p>Urban</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img class="bg-img img-fluid" src={wedding} alt="wedding" />
            <Carousel.Caption>
                <p>Wedding</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img class="bg-img img-fluid" src={art} alt="art" />
            <Carousel.Caption>
                <p>Art</p>
              </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div class="float-sm-right">
        <div class="fl-fl float-fb">
          <a href="https://www.facebook.com/IllrealPresents/posts/3597922013602149" target="_blank"><p>Like me!</p> <FaFacebookSquare class="float-social"/>
          </a>
        </div>
        <div class="fl-fl float-ig">
          <a href="https://www.instagram.com/illrealpresents/?hl=hu" target="_blank"><p>Follow me!</p><FaInstagram class="float-social"/>
          </a>
        </div>
      </div>

    </section>

    <footer>
      <div class="container-fluid">
        <div id="footer-block" class="row">
          <div class="col-lg-4 col-md-4 order-2 col-sm-12 order-md-1 my-auto">
            <div class="container-fluid" id="footer-nav">
              <Link to="/shop"><p>Shop</p></Link>
              <p> // </p>
              <a href="mailto:illreal@gmail.com"><p>Contact</p></a>
              <p> // </p>
              <Link to="/impressum"><p>Impressum</p></Link>
            </div>
            <div class="container-fluid"><p id="copyr-text">Illreal photography &copy; // Created by <a href="#" id="me">Richard Seres</a> 2021</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 order-1 col-sm-pull-12 order-md-2 d-flex align-items-center justify-content-center">
            <a href="https://www.facebook.com/IllrealPresents/posts/3597922013602149" target="_blank"><FaFacebookSquare class="social"/></a>
            <a href="https://www.instagram.com/illrealpresents/?hl=hu" target="_blank"><FaInstagram class="social"/></a>
          </div>
          <div class="col-lg-4 col-md-4 order-3 col-sm-12 order-md-3 d-flex align-items-center justify-content-end">
            <Link to="/"><h3 id="logo">illreal</h3></Link>
          </div>
        </div>
      </div>
    </footer>
  </main>
  );
}