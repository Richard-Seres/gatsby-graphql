import React, {Component} from "react"
import { Link } from "gatsby"
import {Navbar, Nav, NavDropdown} from "react-bootstrap"
import styles from "../../styles/headerMain.module.css"

// HeaderMain function //
class HeaderMain extends Component {
  state = {
    visible: false
  };
  render () {
/*     const divider = props.divider  //`${styles.wedItemSep}`;
 *//*     if (this.state.visible) divider === 'wedItemSep'
 */  
  return (

    <header className={styles.header}>
      {/* Collapsed navbar */}
      <Navbar collapseOnSelect expand="lg" fixed="top" className={styles.navbar}>
        {/* Home page */}
        <Navbar.Brand>
          <Link to="/" className={styles.navbarBrand}>Illreal photography</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(103, 38, 194, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e" alt="toggle-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
              
            {/* Portfolio pages */}
            <NavDropdown title={<h5>Portfolio</h5>} className={styles.dropDown}>
              <NavDropdown.Item>
                <Link to="/portfolio">Portfolio</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/portfolio/urban">Urban</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/portfolio/wedding">Wedding</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/portfolio/art">Art</Link>
              </NavDropdown.Item>
            </NavDropdown>

            {/* Wedding page */}
            <Nav.Link>
            {this.state.visible ? <HeaderMain /> : null}

              <p className={`${styles.itemSep} ${styles.wedItemSep}`}> &frasl; &frasl; </p>
              <Link onClick={ () => {
                this.setState({ visible: false})
              }} to="/wedding">
                Wedding
              </Link>
              <p className={styles.itemSep}> &frasl; &frasl; </p>
            </Nav.Link>

            {/* Introduction page */}
            <Nav.Link>
              <Link to="/introduction">
                Introduction
              </Link>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Navbar> {/* Collapsed navbar */}
    </header>
  )
  }
}

export default HeaderMain;