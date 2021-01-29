import React from "react"
import { Link } from "gatsby"
import styles from "./portfolio.module.css"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

{/* 1. Urban page function */}
export default function Portfolio() {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "urban"}}) {
      edges {
        node {
          base
          childImageSharp {
            fluid (maxWidth: 3840) {
              aspectRatio
              base64
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
  
  `)
  return (
    <Layout> {/* 2. Header & Footer component */}
      <section className={styles.urban}>
                
        {/* 3.1. Urban heading */}
        <section className={styles.urbanTxt}>
          <h1>Urban</h1>
        </section>
          
        <section>
          {data.allFile.edges.map(({node}) =>
          (
            <Img fluid={node.childImageSharp.fluid.src["/static/059ede1ea11443d1b384fa67e3fe0678/14b42/_DSC3650-f2.jpg"]} />
          ))}
        </section>

      </section>
    </Layout>
  )
}