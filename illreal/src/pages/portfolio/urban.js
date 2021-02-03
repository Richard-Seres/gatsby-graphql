import React from "react"
import styles from "../portfolio/urban.module.css"
import Layout from "../../components/layout"
import { SRLWrapper } from "simple-react-lightbox";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const options = {
  settings: {},
  buttons: {
    showDownloadButton: false,
  },
  thumbnails: {},
}

export default function Urban() {
      const data = useStaticQuery(graphql`
      query {
        imgOne: file(
          relativePath: { eq: "urban/img1.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgTwo: file(
          relativePath: { eq: "urban/img2.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgThree: file(
          relativePath: { eq: "urban/img3.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgFour: file(
          relativePath: { eq: "urban/img4.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgFive: file(
          relativePath: { eq: "urban/img5.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgSix: file(
          relativePath: { eq: "urban/img6.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgSeven: file(
          relativePath: { eq: "urban/img7.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgEight: file(
          relativePath: { eq: "urban/img8.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgNine: file(
          relativePath: { eq: "urban/img9.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgTen: file(
          relativePath: { eq: "urban/img10.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgEleven: file(
          relativePath: { eq: "urban/img11.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgTwelve: file(
          relativePath: { eq: "urban/img12.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgThirteen: file(
          relativePath: { eq: "urban/img13.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgFourteen: file(
          relativePath: { eq: "urban/img14.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
    }
    
      `)
      return(
        <Layout> {/* 2. Header & Footer component */}
      <section className={styles.urban}>              
          {/* 3.1. Urban heading */}
          <section className={styles.urbanTxt}>
            <h1>Urban</h1>
          </section>
          
          <section>
          <SRLWrapper options={options}>
            <div className="container-fluid px-1">
              <div className="row mx-auto mx-md-0">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-1 px-0">
                  <a href={data.imgOne.childImageSharp.fluid.src}>
                    <Img fluid={data.imgOne.childImageSharp.fluid} onContextMenu="return false;" />
                  </a>
                </div>
              </div>
              <div className="row mx-auto mx-md-0"> 
                <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-1">
                  <a href={data.imgTwo.childImageSharp.fluid.src}>
                    <Img fluid={data.imgTwo.childImageSharp.fluid} />
                  </a>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-0">
                  <a href={data.imgThree.childImageSharp.fluid.src}>
                    <Img fluid={data.imgThree.childImageSharp.fluid} style={{height: "100%"}} />
                  </a>
                </div>
              </div>
              <div className="row mx-auto mx-md-0">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-1 px-0">
                  <a href={data.imgFour.childImageSharp.fluid.src}>
                    <Img fluid={data.imgFour.childImageSharp.fluid} />
                  </a>
                </div>
              </div>
              <div className="row mx-auto mx-md-0"> 
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-1 ">
                  <a href={data.imgFive.childImageSharp.fluid.src}>
                    <Img fluid={data.imgFive.childImageSharp.fluid} style={{height: "100%"}} />
                  </a>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-0">
                  <a href={data.imgSix.childImageSharp.fluid.src}>
                    <Img fluid={data.imgSix.childImageSharp.fluid} />
                  </a>
                </div>
              </div>
              <div className="row mx-auto mx-md-0">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-1 px-0">
                  <a href={data.imgSeven.childImageSharp.fluid.src}>
                    <Img fluid={data.imgSeven.childImageSharp.fluid} />
                  </a>
                </div>
              </div>
              <div className="row mx-auto mx-md-0"> 
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-1">
                  <a href={data.imgEight.childImageSharp.fluid.src}>
                    <Img fluid={data.imgEight.childImageSharp.fluid} style={{height: "100%"}} />
                  </a>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-0">
                  <a href={data.imgNine.childImageSharp.fluid.src}>
                    <Img fluid={data.imgNine.childImageSharp.fluid} />
                  </a>
                </div>
              </div>
              <div className="row mx-auto mx-md-0">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-1 px-0">
                  <a href={data.imgTen.childImageSharp.fluid.src}>
                    <Img fluid={data.imgTen.childImageSharp.fluid} />
                  </a>
                </div>
              </div>
              <div className="row mx-auto mx-md-0"> 
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-1">
                  <a href={data.imgEleven.childImageSharp.fluid.src}>
                    <Img fluid={data.imgEleven.childImageSharp.fluid} />
                  </a>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-0">
                  <a href={data.imgTwelve.childImageSharp.fluid.src}>
                    <Img fluid={data.imgTwelve.childImageSharp.fluid} style={{height: "100%"}} />
                  </a>
                </div>
              </div>
              <div className="row mx-auto mx-md-0">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-1 px-0">
                  <a href={data.imgThirteen.childImageSharp.fluid.src}>
                    <Img fluid={data.imgThirteen.childImageSharp.fluid} />
                  </a>
                </div>
              </div>
              <div className="row mx-auto mx-md-0">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-5 px-0">
                  <a href={data.imgFourteen.childImageSharp.fluid.src}>
                    <Img fluid={data.imgFourteen.childImageSharp.fluid} />
                  </a>
                </div>
              </div>
            </div>
            </SRLWrapper>
          </section>
            
        </section>
        </Layout>
      )
  } 
