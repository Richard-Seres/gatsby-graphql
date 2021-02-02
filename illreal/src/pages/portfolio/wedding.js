import React from "react"
import styles from "../portfolio/wedding.module.css"
import Layout from "../../components/layout"
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Gallery } from "gatsby-theme-gallery";


{/* 1. Urban page function */}
export default function Wedding() {


    return (
      <Layout> {/* 2. Header & Footer component */}
        <section className={styles.wedding}>
                
          {/* 3.1. Urban heading */}
          <section className={styles.weddingTxt}>
            <h1>Urban</h1>
          </section>
          
          <section>
            <Gallery galleryPath="false"/>
          </section>
            
        </section>
      </Layout>
    ) 
}