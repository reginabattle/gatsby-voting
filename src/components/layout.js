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
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-FVKSD6XGQK"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FVKSD6XGQK');
          </script>
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
