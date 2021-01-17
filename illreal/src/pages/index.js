import React from "react"
import { Carousel } from 'react-bootstrap'
import { Link } from "gatsby"
import Footer from "../components/footer"
import styles from "../styles/new-style.css"
import urban from "../content/assets/urban.jpg"
import wedding from "../content/assets/wedding.jpg"
import art from "../content/assets/art.jpg"

export default function Home() {
  return (
    <main>
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <nav class="navbar navbar-fixed-top noshrink navbar-expand-lg navbar-expand-md ml-auto" role="navigation">
          <ul class="nav navbar-nav">
            <li class="active" id="home"><Link to="/">Illreal photography</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/introduction">Introduction</Link></li>
          </ul>
        </nav>
        <header id="myCarousel">
          <Carousel>
            <Carousel.Item>
            <img class="bg-img img-fluid" src={urban} alt="urban" />
            </Carousel.Item>
            <Carousel.Item>
              <img class="bg-img img-fluid" src={wedding} alt="wedding" />
            </Carousel.Item>
            <Carousel.Item>
              <img class="bg-img img-fluid" src={art} alt="art" />
            </Carousel.Item>
          </Carousel>
        </header>
      </div>
    </div>
    <Footer />
    </main>
  );
}