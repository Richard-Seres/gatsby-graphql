import React from "react"
import Layout from "../components/layout"
import styles from "../styles/introduction.module.css"

// Introduction page function //
export default function Introduction() {
  return (
    <Layout> {/* Header & Footer components */}

      {/* Introduction main section */}
      <section className={styles.introPage}>

        {/* Introduction heading */}
        <section className={styles.introH}>
          <h1>Introduction</h1>
        </section>

        {/* Introduction content */}
        <section>

          {/* Video */}
          <section>
            <div className="container d-flex flex-row justify-content-center pb-4" style={{width: "90%", maxHeight: "70vh"}}>
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" width="644" height="362" src="https://www.youtube.com/embed/LSYbc5OdJ_g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" title="Introduction">
                </iframe>
              </div>
            </div>
          </section>

          {/* Quote */}
          <section>
            <blockquote>
            In photography there is a reality so subtle that it becomes more real than reality.
            </blockquote>
          </section>

          {/* Introduction text */}
          <section>
            <div className="container d-flex flex-row justify-content-center">
              <div className="row">
                <div classname="col-lg-10 col-lg-offset-1">
                  <div className="pb-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="pb-3">
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <div className="pb-5">
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> {/* Introduction text */}

        </section> {/* Introduction content */}

      </section> {/* Introduction page */}
    </Layout>
  )
}