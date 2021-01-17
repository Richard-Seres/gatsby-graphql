import React from "react"
import { Link } from "gatsby"
import styles from "../styles/new-style.css"


export default function Header(props) {
  return (
    <div class="container-fluid">
      <div class="row header">
        <nav class="nav navbar-expand-lg navbar-expand-md ml-auto">
          <ul class="nav navbar-nav">
            <li class="active" id="home"><Link to="/">Illreal photography</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/introduction">Introduction</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}