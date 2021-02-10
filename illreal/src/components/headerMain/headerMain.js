import React from "react"
import { Link } from "gatsby"
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import styles from "../../styles/headerMain.module.css"


{/*========================================
1. Header
    1.1. Collapsed navbar (Navbar)
      1.2. Home page (Navbar.Brand)
      1.3. Portfolio page
      1.4. Shop page
      1.5. Introduction page
===========================================*/}

export default function HeaderMain () {
  return (
    <div className={styles.headerMain}>
      {/* 1. Header */}
      <header className={styles.header}>
        {/* 1.1. Collapsed navbar */}
        <Navbar collapseOnSelect expand="lg" fixed="top" className={styles.navbar}>
          {/* 1.2. Home page */}
          <Navbar.Brand>
            <Link to="/" className={styles.navbarBrand}>Illreal photography</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(103, 38, 194, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"></img>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              
              {/* 1.3. Portfolio pages */}
              <NavDropdown title={<p>Portfolio</p>} className={styles.dropDown}>
                <NavDropdown.Item>
                  <Link to="/portfolio">Portfolio</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider className={styles.divider}/>
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

              {/* 1.4. Wedding page */}
              <Nav.Link>
                <p className={styles.itemSep}> // </p>
                <Link to="/wedding">
                  Wedding
                </Link>
                <p className={styles.itemSep}> // </p>
              </Nav.Link>

              {/* 1.5. Introduction page */}
              <Nav.Link>
                <Link to="/introduction">
                  Introduction
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  );
}