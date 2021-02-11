import React from "react"
import { Link } from "gatsby"
import styles from "../styles/portfolio.module.css"
import Layout from "../components/layout"
import urban from "../content/assets/urban.jpg"
import wedding from "../content/assets/wedding.jpg"
import art from "../content/assets/art.jpg"

// Portfolio page function //
export default function Portfolio() {
  return (
    <Layout> {/* Header & Footer component */}
      {/* Portfolio main section */}
      <section className={styles.portfolioPage}>

        {/* Portfolio heading */}
        <section className={styles.portfolioTxt}>
          <h1>Portfolio</h1>
        </section>

        {/* Portfolio content */}
        <section>
          <div className="container d-flex flex-row justify-content-center" style={{maxHeight: "100%"}}>
            <div className="row">

              {/* Urban */}
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

              {/* Wedding */}
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

              {/* Art */}
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
                    <Link to="/portfolio/art"></Link>
                  </figure>
                </div>
              </div>

            </div> {/* row end */}
          </div> {/* container end */}
        </section> {/* portfolio content section */}

      </section> {/* portfolio main section */}
    </Layout>
  )
}

