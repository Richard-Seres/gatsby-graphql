import React from "react"
import Layout from "../components/layout"
import styles from "../styles/impressum.module.css"

// Impressum page function //
export default function Impressum() {
  return (
    <Layout> {/* Header & Footer components */}
      {/* Impressum main section */}
      <section className={styles.impPage}>

        {/* Impressum heading */}
        <section className={styles.impH}>
          <h1>Impressum</h1>
        </section>

        {/* Impressum content */}
        <section>
          {/* Information */}
          <section>
            <div className="container-fluid d-flex flex-column align-items-center pt-4 pb-4">
              <div className="row">
                <h2>Information</h2>
              </div>
              <div className="row">
                <div><p>David Nagy</p></div>
              </div>
              <div className="row">
                <div><p>Varoskert street</p></div>
              </div>
              <div className="row">
                <div><p>3200 Gyöngyös Hungary</p></div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <div className="container-fluid d-flex flex-column align-items-center pb-5">
              <div className="row">
                <h2>Contact</h2>
              </div>
              <div className="row">
                <div>
                  <p>E-mail: </p>
                  <a href="mailto:illreal@gmail.com">
                    <p>illreal@gmail.com</p>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Copyright */}
          <section>
            <div className="container-fluid pb-5">
              <div className={styles.crTitle}>
                <h2>Copyright</h2>
              </div>
              <div>
                <p>
                  The content and works created by the site operators on these pages are subject to Hungarian
                  copyright law. The duplication, editing, distribution and any kind of exploitation outside
                  the limits of copyright require the written consent of the respective author or creator.
                  Downloads and copies of this site are only permitted for private, non-commercial use.
                </p>
              </div>
              <div>
                <p>
                  Insofar as the contents on this page were not created by the operator, the copyrights of
                  third parties are respected. In particular, third-party content is marked as such. Should
                  you nevertheless become aware of a copyright infringement, please note accordingly. If we
                  become aware of any infringements, we will remove such content immediately.
                </p>
              </div>
            </div>
          </section>

        </section> {/* Impressum content */}
      </section> {/* Impressum page */}
    </Layout>
  )
}