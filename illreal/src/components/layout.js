import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

const Layout = (props) => {
  return (
  <div>
      <Header />
      {props.children}

      <Footer />
  </div>
  )
}

export default Layout