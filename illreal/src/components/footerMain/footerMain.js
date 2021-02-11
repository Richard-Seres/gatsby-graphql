import React from "react"
import { Link } from "gatsby"
import styles from "../../styles/footerMain.module.css"
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"

{/*}
===================================================
  1. Footer
    1.1. Footer content
      1.2. Shop link
      1.3. Mailto link 
      1.4. Impressum link
    1.5. Copyright
    1.6. Social media icons
      1.7. Facebook
      1.8. Instagram
    1.9 Logo
====================================================
*/}


export default function FooterMain() {
  return (
    <footer className={styles.footerMain}>
      {/* 1.1. Footer content */}
      <div className="row" style={{marginLeft: 0}}>
          <div className="col-lg-4 col-md-4 order-2 col-sm-12 col-xs-12 order-md-1 my-auto">
            <div className="container" style={{paddingLeft: 0}}>

              {/* 1.2. Shop link */}
              <Link to="/wedding">
                <h6>Wedding</h6>
              </Link>
              <h6> // </h6>

              {/* 1.3. Mailto link */}
              <a href="mailto:illreal@gmail.com">
                <h6>Contact</h6>
              </a>
              <h6> // </h6>

              {/* 1.4. Impressum link */}
              <Link to="/impressum">
                <h6>Impressum</h6>
              </Link>

            </div>

            {/* 1.5. Copyright */}
            <div className="container" style={{paddingLeft: 0}}>
              <h6 className={styles.copyRText}>Illreal photography &copy; // Created by 
                <a href="#" className={styles.me}> Richard Seres</a> 2021
              </h6>
            </div>
          </div>
          
          {/* 1.6. Social media icons */}
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 order-1 col-sm-pull-12 order-md-2 d-flex align-items-center justify-content-center">

            {/* 1.7. Facebook icon */}
            <a href="https://www.facebook.com/IllrealPresents/posts/3597922013602149" target="_blank">
              <FaFacebookSquare className={styles.social}/>
            </a>

            {/* 1.8. Instagram icon */}
            <a href="https://www.instagram.com/illrealpresents/?hl=hu" target="_blank">
              <FaInstagram className={styles.social}/>
            </a>

          </div>

          {/* 1.9. Logo */}
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 order-3 col-sm-12 order-md-3 d-flex align-items-center justify-content-end">
            <Link to="/">
              <h3 className={styles.logo}>illreal</h3>
            </Link>
          </div>

      </div>
    </footer>  
  );
}