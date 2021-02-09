// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"
import "./src/styles/global.css"
import "./src/styles/index.module.css"
import "./src/styles/portfolio.module.css"
// components
import "./src/components/headerMain/headerMain.module.css"
import "./src/components/footerMain/footerMain.module.css"
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

// SRL
import React from 'react'
import SimpleReactLightbox from 'simple-react-lightbox'

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  <SimpleReactLightbox>{element}</SimpleReactLightbox>
)


