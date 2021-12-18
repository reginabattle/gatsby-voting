import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { CookiesProvider } from "react-cookie"
import favicon from "../assets/images/favicon.png"
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
      <CookiesProvider>
        <Helmet>
          <html lang="en" amp />
          <title>{title}</title>
          <link rel="icon" href={favicon} />
        </Helmet>
        <main className="content">
          <div className="container">{children}</div>
        </main>
        <Footer />
      </CookiesProvider>
    </>
  )
}

export default Layout
