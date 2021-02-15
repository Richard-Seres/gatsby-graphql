import React from "react"
import styles from "../styles/wedding.module.css"
import pageStatus from "../content/assets/page-under-construction.png"

export default function Wedding() {
  return (
      <section className={styles.wedding}>
        <div className="container h-100 w-100">
          <div className="row h-100 w-100 align-items-center justify-content-center mx-0">
              <img className={styles.underCon} src={pageStatus} alt="under construction" />
          </div>
        </div>
      </section>
  )
}