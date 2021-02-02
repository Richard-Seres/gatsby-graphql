import React from "react"
import { Link } from "gatsby"
import styles from "../portfolio/portfolio.module.css"
import Layout from "../../components/layout"
import urban from "../../content/assets/urban.jpg"
import wedding from "../../content/assets/wedding.jpg"
import art from "../../content/assets/art.jpg"

{/* CONTENT */}
{/* Illreal portfolio page content */}
{/*
===================================================
  1. Portfolio page function
===================================================
  2. Header & Footer component
===================================================
  3. Portfolio main section
    3.1. Portfolio heading
    3.2. Portfolio page content
      3.3. Urban
      3.4. Wedding
      3.5. Art
===================================================
*/}

{/* 1. Portfolio page function */}
export default function Portfolio() {
  return (
    <Layout> {/* 2. Header & Footer component */}
      {/* 3. Portfolio main section */}
      <section className={styles.portfolio}>

        {/* 3.1. Portfolio heading */}
        <section className={styles.portfolioTxt}>
          <h1>Portfolio</h1>
        </section>

        {/* 3.2. Portfolio content */}
        <section>
          <div className="container d-flex flex-row justify-content-center">
            <div className="row">

              {/* 3.3. Urban */}
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className={styles.imgBox}>
                  <figure>
                    <img className={styles.img} src={urban} alt="urban" />
                    <figcaption>
                      <h3>Urban</h3>
                      <h4>&nbsp;</h4>                  
                    </figcaption>
                    <figupdate className={styles.figup}>
                    </figupdate>
                    <Link to="/portfolio/urban"></Link>
                  </figure>
                </div>
              </div>

              {/* 3.4. Wedding */}
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className={styles.imgBox}>
                  <figure>
                    <img className={styles.img} src={wedding} alt="wedding" />
                    <figcaption>
                      <h3>Wedding</h3>
                      <h4>&nbsp;</h4>            
                    </figcaption>
                    <figupdate className={styles.figup}>
                    </figupdate>
                    <Link to="/portfolio/wedding"></Link>
                  </figure>
                </div>
              </div>

              {/* 3.5. Art */}
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className={styles.imgBox}>
                  <figure>
                    <img className={styles.img} src={art} alt="art" />
                    <figcaption>
                      <h3>Art</h3>
                      <h4>&nbsp;</h4>    
                    </figcaption>
                    <figupdate className={styles.figup}>
                    </figupdate>
                    <Link to="/art"></Link>
                  </figure>
                </div>
              </div>

            </div> {/* row end */}
          </div> {/* container end */}
        </section>

      </section>
    </Layout>
  )
}

