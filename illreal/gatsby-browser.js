// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"
import "./src/styles/layout.css"
import "./src/styles/typography.css"
import "./src/styles/index.module.css"
import "./src/styles/portfolio.module.css"
import "./src/styles/introduction.module.css"
import "./src/styles/impressum.module.css"
import "./src/styles/headerMain.module.css"
import "./src/styles/footerMain.module.css"
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

// SRL
import React from 'react'
import SimpleReactLightbox from 'simple-react-lightbox'

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  <SimpleReactLightbox>{element}</SimpleReactLightbox>
)


