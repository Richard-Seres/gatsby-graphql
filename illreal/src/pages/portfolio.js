import React from "react"
import { Link } from "gatsby"
import styles from "./portfolio.module.css"
import Layout from "../components/layout"
import urban from "../content/assets/urban.jpg"
import wedding from "../content/assets/wedding.jpg"
import art from "../content/assets/art.jpg"

export default function Portfolio() {
  return (
    <Layout>
      <section className={styles.portfolio}>
        <section className={styles.portfolioTxt}>
          <h1>Portfolio</h1>
        </section>

        <section className={styles.portfolioPage}>
          <div className="container d-flex flex-row justify-content-center">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className={styles.imgBox}>
                  <figure>
                    <img className={styles.img} src={urban} alt="urban" />
                    <figcaption>
                      <h3>Urban</h3>
                      <h4>&nbsp;</h4>                  
                    </figcaption>
                    <figupdate>
                    </figupdate>
                    <Link to="/urban"></Link>
                  </figure>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className={styles.imgBox}>
                  <figure>
                    <img className={styles.img} src={wedding} alt="wedding" />
                    <figcaption>
                      <h3>Wedding</h3>
                      <h4>&nbsp;</h4>            
                    </figcaption>
                    <figupdate>
                    </figupdate>
                    <Link to="/wedding"></Link>
                  </figure>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className={styles.imgBox}>
                  <figure>
                    <img className={styles.img} src={art} alt="art" />
                    <figcaption>
                      <h3>Art</h3>
                      <h4>&nbsp;</h4>    
                    </figcaption>
                    <figupdate>
                    </figupdate>
                    <Link to="/art"></Link>
                  </figure>
                </div>

              </div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  )
}

