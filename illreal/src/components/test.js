import { useStaticQuery, graphql } from "gatsby"

const images = useStaticQuery(graphql`
query {
  allFile(filter: {relativeDirectory: {eq: "urban"}}) {
    edges {
      node {
        childImageSharp {
          fluid(quality: 100, maxWidth: 3840) {
            src
            originalName
          }
        }
      }
    }
  }
}
`)


const {images.allFile.edges.node.childImageSharp.fluid.originalName} = name;
const src = {images.allFile.edges.node.childImageSharp.fluid.src};

