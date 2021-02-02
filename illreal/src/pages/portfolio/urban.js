import React from "react"
import styles from "../portfolio/urban.module.css"
import Layout from "../../components/layout"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const images= [
  '/urban/img8.jpg'
]


export default class Urban extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
    render(){

      const { photoIndex, isOpen } = this.state;
    
      return(
        <Layout> {/* 2. Header & Footer component */}
      <section className={styles.urban}>              
          {/* 3.1. Urban heading */}
          <section className={styles.urbanTxt}>
            <h1>Urban</h1>
          </section>
          
          <div>
            <div className="container-fluid px-1">
              <div className="row mx-auto mx-md-0">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-1 px-0">
                  <img src="url"  onClick={() => this.setState({ isOpen: true, photoIndex:0 })}/>
                </div>
              </div>
              <div className="row mx-auto mx-md-0"> 
                <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-1">
                  <img src="url" onClick={() => this.setState({ isOpen: true, photoIndex:1 })}/>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-0">
                  <img src="url" style={{height: "100%"}} onClick={() => this.setState({ isOpen: true, photoIndex:2 })}/>
                </div>
              </div>
              <div className="row mx-auto mx-md-0">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-1 px-0">
                  <img src="url" onClick={() => this.setState({ isOpen: true, photoIndex:3 })}/>
                </div>
              </div>
              <div className="row mx-auto mx-md-0"> 
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-1 ">
                  <img src="url" style={{height: "100%"}} onClick={() => this.setState({ isOpen: true, photoIndex:4 })}/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-0">
                  <img src="url" onClick={() => this.setState({ isOpen: true, photoIndex:5 })}/>
                </div>
              </div>
              <div className="row mx-auto mx-md-0">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-1 px-0">
                  <img src="url" onClick={() => this.setState({ isOpen: true, photoIndex:6 })}/>
                </div>
              </div>
              <div className="row mx-auto mx-md-0"> 
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-1">
                  <img src="url" style={{height: "100%"}} onClick={() => this.setState({ isOpen: true, photoIndex:7 })}/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-0">
                  <img src="url" onClick={() => this.setState({ isOpen: true, photoIndex:8 })}/>
                </div>
              </div>
              <div className="row mx-auto mx-md-0">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-1 px-0">
                  <img src="url" onClick={() => this.setState({ isOpen: true, photoIndex:9 })}/>
                </div>
              </div>
              <div className="row mx-auto mx-md-0"> 
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-1">
                  <img src="url" onClick={() => this.setState({ isOpen: true, photoIndex:10 })}/>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 pb-1 px-0 pl-lg-0 pr-lg-0">
                  <img src="url" style={{height: "100%"}} onClick={() => this.setState({ isOpen: true, photoIndex:11 })} />
                </div>
              </div>
              <div className="row mx-auto mx-md-0">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-1 px-0">
                  <img src="url" onClick={() => this.setState({ isOpen: true, photoIndex:12 })} />
                </div>
              </div>
              <div className="row mx-auto mx-md-0">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-5 px-0">
                  <img src="url" onClick={() => this.setState({ isOpen: true, photoIndex:13 })} />
                </div>
              </div>
            </div>
            {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
            )}
          </div>
            
        </section>
        </Layout>
      )
    }
  } 
