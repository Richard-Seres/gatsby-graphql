import React from "react"
import { Link } from "gatsby"
import styles from "../styles/new-style.css"
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"

export default function Footer() {
  return (
    <div class="container-fluid">
      <div id="footer" class="row">
        <div class="col-lg-4 col-md-4 order-2 col-sm-12 order-md-1 my-auto">
          <div class="container-fluid" id="footer-nav">
            <Link to="/shop"><p>Shop</p></Link>
            <p> // </p>
            <a href="mailto:illreal@gmail.com"><p>Contact</p></a>
            <p> // </p>
            <Link to="/impressum"><p>Impressum</p></Link>
          </div>
          <div class="container-fluid"><p id="copyr-text">Illreal photography &copy; // Design <a href="#" id="me" style={{color: ' #707070'}}>Richard Seres</a> 2021</p>
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
  );
}