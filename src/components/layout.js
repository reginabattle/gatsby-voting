import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"

const Layout = ({ children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        title={title}
        htmlAttributes={{
          lang: "en",
        }}
      />
      <main>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
