import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import HeaderMain from "./header/headerMain"
import FooterMain from "./footer/footerMain"

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