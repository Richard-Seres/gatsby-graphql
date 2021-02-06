import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import styles from '../styles/index.module.css'
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'

{/* CONTENT */}
{/* Illreal home page content */}
{/*
===================================================
  1. Home page function
===================================================
  2. Header & Footer component
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
*/}

{/* 1. Home page function */}
export default function Home() {
  // Query of carousel images
  const data = useStaticQuery(graphql`
      query {
        imgOne: file(relativePath: {eq: "urban/img1.jpg"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 3840) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgTwo: file(relativePath: {eq: "wedding/img1.jpg"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 3840) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgThree: file(relativePath: {eq: "art/img1.jpg"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 3840) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
    `)
    
  return (
  <main className={styles.index}>
    {/* 2. Header & Footer components */}
    <Layout>
    
      {/* 3. Portfolio links, Carousel & Social */}
      <section>

        {/* 3.1. Portfolio categories */ }
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

        {/* 3.2. Carousel */ }
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

        {/* 3.6. Floating Social Media Bar */}
        <section className="float-sm-right">
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
        </section>

      </section> {/* 3. Portfolio links, Carousel & Social */}

    </Layout>
  </main>
  );
}