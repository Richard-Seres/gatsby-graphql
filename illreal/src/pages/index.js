import React from "react"
import { Carousel } from "react-bootstrap"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import styles from "../styles/index.module.css"
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"

// Home page function //
export default function Home() {
  // Query of carousel images
  const data = useStaticQuery(graphql`
      query {
        imgOne: file(relativePath: {eq: "urban/img1.jpg"}) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgTwo: file(relativePath: {eq: "wedding/img1.jpg"}) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgThree: file(relativePath: {eq: "art/img1.jpg"}) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
    `)
    
  return (
  <main className={styles.index}>
    {/* Header & Footer components */}
    <Layout>
    
      {/* Home main section */}
      <section>

        {/* Portfolio categories */ }
        <article className={styles.indexArticle}>
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

        {/* Carousel */ }
        <section>
          <Carousel className={styles.carousel}>
            <Carousel.Item> {/* Urban */}
                <Img fluid={data.imgOne.childImageSharp.fluid} className={styles.img} alt="urban"  />
              <Carousel.Caption className={styles.carouselCaption}>
                <Link to="/portfolio/urban">Urban</Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item> {/* Wedding */}
               <Img fluid={data.imgTwo.childImageSharp.fluid} className={styles.img} alt="wedding"  />
              <Carousel.Caption className={styles.carouselCaption}>
                <Link to="/portfolio/wedding">Wedding</Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item> {/* Art */}
                <Img fluid={data.imgThree.childImageSharp.fluid} className={styles.img} alt="art"  />
              <Carousel.Caption className={styles.carouselCaption}>
                <Link to="/portfolio/art">Art</Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>

        {/* Floating Social Media Bar */}
        <section className="float-sm-right">
          {/* Facebook */}
          <div className={`${styles.flFl} ${styles.floatFb}`}>
            <a href="https://www.facebook.com/IllrealPresents/posts/3597922013602149" target="_blank"  rel="noreferrer">Like me! <FaFacebookSquare className={styles.floatSocial}/>
            </a>
          </div>
          {/* Instagram */}
          <div className={`${styles.flFl} ${styles.floatIg}`}>
            <a href="https://www.instagram.com/illrealpresents/?hl=hu" target="_blank"  rel="noreferrer">Follow me!<FaInstagram className={styles.floatSocial}/>
            </a>
          </div>
        </section>

      </section> {/* Home main section */}

    </Layout>
  </main>
  );
}