import React from "react"
import styles from "../../styles/portfolio.module.css"
import Layout from "../../components/layout"
import { SRLWrapper } from "simple-react-lightbox";
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import urban from "../../content/assets/urban.jpg"
import wedding from "../../content/assets/wedding.jpg"

// Lightbox Settings //
const options = {
  settings: {autoplaySpeed: 4000,},
  buttons: {
    showDownloadButton: false,
  }, 
  progressBar: {
    backgroundColor: '#000000',
    fillColor: '#6726c2',
  },
  caption: {
    showCaption: false,
  }
}

// Art page function //
export default function Art() {
  
      // GraphQl queries //
      const data = useStaticQuery(graphql`
      query {
        imgOne: file(relativePath: {eq: "art/img1.jpg"}) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgTwo: file(
          relativePath: { eq: "art/img2.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgThree: file(
          relativePath: { eq: "art/img3.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgFour: file(
          relativePath: { eq: "art/img4.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgFive: file(
          relativePath: { eq: "art/img5.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgSix: file(
          relativePath: { eq: "art/img6.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgSeven: file(
          relativePath: { eq: "art/img7.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgEight: file(
          relativePath: { eq: "art/img8.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgNine: file(
          relativePath: { eq: "art/img9.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgTen: file(
          relativePath: { eq: "art/img10.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgEleven: file(
          relativePath: { eq: "art/img11.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgTwelve: file(
          relativePath: { eq: "art/img12.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgThirteen: file(
          relativePath: { eq: "art/img13.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgFourteen: file(
          relativePath: { eq: "art/img14.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgFithteen: file(
          relativePath: { eq: "art/img15.jpg" }
        ) {
          childImageSharp {      
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        imgSixteen: file(
          relativePath: { eq: "art/img16.jpg" }
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
    <Layout> {/* Header & Footer component */}
      {/* Art main section */}
      <section className={styles.portfolio}>      

        {/* Art heading */}
        <section className={styles.categoryTxt}>
          <h1>Art</h1>
          <div className={styles.arrow}>
            <a href="#gallery">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </section>

        {/* Gallery section */}
        <section id="gallery">

          {/* Simple React Lightbox */}
          <SRLWrapper options={options} >

            <div className="container-fluid px-1" >

              {/* Row 1 - IMG 1*/}
              <div className="row mx-auto mx-md-0" >
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-1 px-0" style={{maxHeight: "100vh"}} >
                  <a href={data.imgOne.childImageSharp.fluid.src}>
                    <div className="position-relative overflow-hidden" style={{height: "100%"}}>
                      <Img fluid={data.imgOne.childImageSharp.fluid} className={styles.catImg}style={{height: "100%"}} />
                    </div>
                  </a>
                </div>
              </div>

              {/* Row 2 - IMG 2 & 3 */}
              <div className="row mx-auto mx-md-0"> 
                <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-1" style={{maxHeight: "100vh"}} >
                  <a href={data.imgTwo.childImageSharp.fluid.src}>
                    <div className="position-relative overflow-hidden" style={{height: "100%"}}>
                      <Img fluid={data.imgTwo.childImageSharp.fluid} className={styles.catImg} style={{height: "100%"}}  />
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-0" style={{maxHeight: "100vh"}} >
                  <a href={data.imgThree.childImageSharp.fluid.src}>
                    <div className="position-relative overflow-hidden" style={{height: "100%"}}>
                      <Img fluid={data.imgThree.childImageSharp.fluid} className={styles.catImg} style={{height: "100%"}} />
                    </div>
                  </a>
                </div>
              </div>

              {/* Row 3 - IMG 4 */}
              <div className="row mx-auto mx-md-0">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-1 px-0" style={{maxHeight: "100vh"}} >
                  <a href={data.imgFour.childImageSharp.fluid.src}>
                    <div className="position-relative overflow-hidden" style={{height: "100%"}}>
                      <Img fluid={data.imgFour.childImageSharp.fluid} className={styles.catImg} style={{height: "100%"}} />
                    </div>
                  </a>
                </div>
              </div>

              {/* Row 4 - IMG 5 & 6 */}
              <div className="row mx-auto mx-md-0"> 
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-1" style={{maxHeight: "100vh"}} >
                  <a href={data.imgFive.childImageSharp.fluid.src}>
                    <div className="position-relative overflow-hidden" style={{height: "100%"}}>
                      <Img fluid={data.imgFive.childImageSharp.fluid} className={styles.catImg} style={{height: "100%"}} />
                    </div>
                  </a>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-0"style={{maxHeight: "100vh"}}>
                  <a href={data.imgSix.childImageSharp.fluid.src}>
                    <div className="position-relative overflow-hidden" style={{height: "100%"}}>
                      <Img fluid={data.imgSix.childImageSharp.fluid} className={styles.catImg} style={{height: "100%"}}  />
                    </div>
                  </a>
                </div>
              </div>

              {/* Row 5 - IMG 7 */}
              <div className="row mx-auto mx-md-0">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-1 px-0" style={{maxHeight: "100vh"}}>
                  <a href={data.imgSeven.childImageSharp.fluid.src}>
                    <div className="position-relative overflow-hidden" style={{height: "100%"}}>
                      <Img fluid={data.imgSeven.childImageSharp.fluid} className={styles.catImg} style={{height: "100%"}} />
                    </div>
                  </a>
                </div>
              </div>

              {/* Row 6 - IMG 8 & 9 */}
              <div className="row mx-auto mx-md-0"> 
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-1" style={{maxHeight: "100vh"}} >
                  <a href={data.imgEight.childImageSharp.fluid.src}>
                    <div className="position-relative overflow-hidden" style={{height: "100%"}}>
                      <Img fluid={data.imgEight.childImageSharp.fluid} className={styles.catImg} style={{height: "100%"}} />
                    </div>
                  </a>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-0" style={{maxHeight: "100vh"}} >
                  <a href={data.imgNine.childImageSharp.fluid.src}>
                    <div className="position-relative overflow-hidden" style={{height: "100%"}}>
                      <Img fluid={data.imgNine.childImageSharp.fluid} className={styles.catImg} style={{height: "100%"}} />
                    </div>
                  </a>
                </div>
              </div>

              {/* Row 7 - IMG 10 */}
              <div className="row mx-auto mx-md-0">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-5 px-0" style={{maxHeight: "100vh"}}>
                  <a href={data.imgTen.childImageSharp.fluid.src}>
                    <div className="position-relative overflow-hidden" style={{height: "100%"}}>
                      <Img fluid={data.imgTen.childImageSharp.fluid} className={styles.catImg} style={{height: "100%"}} />
                    </div>
                  </a>
                </div>
              </div>

              {/* Row 8 - IMG 11 & 12 */}  {/* PB-5  !!! */}
              <div className="row mx-auto mx-md-0"> 
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-1" style={{maxHeight: "100vh"}} >
                  <a href={data.imgEleven.childImageSharp.fluid.src}>
                    <div className="position-relative overflow-hidden" style={{height: "100%"}}>
                      <Img fluid={data.imgEleven.childImageSharp.fluid} className={styles.catImg} style={{height: "100%"}} />
                    </div>
                  </a>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-0" style={{maxHeight: "100vh"}} >
                  <a href={data.imgTwelve.childImageSharp.fluid.src}>
                    <div className="position-relative overflow-hidden" style={{height: "100%"}}>
                      <Img fluid={data.imgTwelve.childImageSharp.fluid} className={styles.catImg} style={{height: "100%"}} />
                    </div>
                  </a>
                </div>
              </div>

              {/* Row 9 - IMG 13 */}
              <div className="row mx-auto mx-md-0">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-1 px-0" style={{maxHeight: "100vh"}}>
                  <a href={data.imgThirteen.childImageSharp.fluid.src}>
                    <div className="position-relative overflow-hidden" style={{height: "100%"}}>
                      <Img fluid={data.imgThirteen.childImageSharp.fluid} className={styles.catImg} style={{height: "100%"}} />
                    </div>
                  </a>
                </div>
              </div>

              {/* Row 10 - IMG 14 & 15 */}
              <div className="row mx-auto mx-md-0"> 
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-1" style={{maxHeight: "100vh"}} >
                  <a href={data.imgFourteen.childImageSharp.fluid.src}>
                    <div className="position-relative overflow-hidden" style={{height: "100%"}}>
                      <Img fluid={data.imgFourteen.childImageSharp.fluid} className={styles.catImg} style={{height: "100%"}} />
                    </div>
                  </a>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-0" style={{maxHeight: "100vh"}} >
                  <a href={data.imgFithteen.childImageSharp.fluid.src}>
                    <div className="position-relative overflow-hidden" style={{height: "100%"}}>
                      <Img fluid={data.imgFithteen.childImageSharp.fluid} className={styles.catImg} style={{height: "100%"}} />
                    </div>
                  </a>
                </div>
              </div>

              {/* Row 11 - IMG 16 */}
              <div className="row mx-auto mx-md-0">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-5 px-0" style={{maxHeight: "100vh"}}>
                  <a href={data.imgSixteen.childImageSharp.fluid.src}>
                    <div className="position-relative overflow-hidden" style={{height: "100%"}}>
                      <Img fluid={data.imgSixteen.childImageSharp.fluid} className={styles.catImg} style={{height: "100%"}} />
                    </div>
                  </a>
                </div>
              </div>
            </div> {/* Container */}

          </SRLWrapper>
        </section> {/* Gallery */}


        {/* Portfolio categories */}
        <section>
          <div className="container d-flex flex-row justify-content-center">
            <div className="row d-flex flex-row justify-content-center">

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

            </div> {/* Row */}
          </div> {/* Container */}
        </section> {/* Portfolio categories */}
            
      </section> {/* Art main section */}
    </Layout>
  )
} 
