import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

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
      <Helmet title={title} />
      <div className="container">
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}</footer>
      </div>
    </>
  )
}

export default Layout
