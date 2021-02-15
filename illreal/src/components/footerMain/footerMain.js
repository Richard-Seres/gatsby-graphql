import React from "react"
import { Link } from "gatsby"
import styles from "../../styles/footerMain.module.css"
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"

// FooterMain function //
export default function FooterMain() {
  return (
    <footer className={styles.footerMain}>
      {/* Footer content */}
      <div className="row" style={{marginLeft: 0}}>
        <div className="col-lg-4 col-md-4 order-2 col-sm-12 col-xs-12 order-md-1 my-auto">
          <div className="container text-nowrap" style={{paddingLeft: 0}}>

            {/* Wedding link */}
            <Link to="/wedding">
              Wedding
            </Link>

            <span className={styles.itemSep}>&nbsp; &frasl; &frasl; &nbsp;</span>

            {/* Mailto link */}
            <a href="mailto:illreal@gmail.com">
              Contact
            </a>

            <span className={styles.itemSep}>&nbsp; &frasl; &frasl; &nbsp;</span>

            {/* Impressum link */}
            <Link to="/impressum">
              Impressum
            </Link>
          </div>

          {/* Copyright */}
          <div className="container" style={{paddingLeft: 0}}>
            <h6 className={styles.copyRText}>Illreal photography &copy; &nbsp; &frasl; &frasl; &nbsp; Created by 
              <a href="https://github.com/Richard-Seres" className={styles.me}> Richard Seres</a> 2021
            </h6>
          </div>
        </div>
          
        {/* Social media icons */}
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 order-1 col-sm-pull-12 order-md-2 d-flex align-items-center justify-content-center">

          {/* Facebook icon */}
          <a href="url(https://www.facebook.com/IllrealPresents/)" target="_blank" rel="noreferrer">
            <FaFacebookSquare className={styles.social}/>
          </a>

          {/* Instagram icon */}
          <a href="url(https://www.instagram.com/illrealpresents/)" target="_blank" rel="noreferrer">
            <FaInstagram className={styles.social}/>
          </a>

        </div>

        {/* Logo */}
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 order-3 col-sm-12 order-md-3 d-flex align-items-center justify-content-end">
          <Link to="/">
            <h3 className={styles.logo}>illreal</h3>
          </Link>
        </div>

      </div> {/* Footer content */}
    </footer>   
  )
}