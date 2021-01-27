import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStaticQuery, graphql } from "gatsby"

import HeaderMain from "./headerMain/headerMain"
import FooterMain from "./footerMain/footerMain"

const Layout = (props) => {
  return (
  <div>
      <HeaderMain />
      {props.children}

      <FooterMain />
  </div>
  )
}

export default Layout