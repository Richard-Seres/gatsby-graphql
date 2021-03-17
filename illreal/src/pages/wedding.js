import React from "react"
import { Link } from "gatsby"
import styles from "../styles/wedding.module.css"
import HeaderWed from "../components/header/headerWed"
import FooterWed from "../components/footer/footerWed"

export default function Wedding() {
  return (
      <section className={styles.wedding}>
        <HeaderWed />
        <section>
          <header className={styles.cover}>
            <div className={styles.wrapper}>
              <div class={styles.box}>
                <h2 class={styles.headline}>
                  <Link to="/portfolio/wedding">Wedding</Link>
                </h2>
              </div>
            </div>
          </header>
          
        </section>
        <FooterWed />
      </section>
  )
}