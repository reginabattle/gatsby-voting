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
      <main>
        <div className="container">{children}</div>
      </main>
      <footer>
        <div className="container">© {new Date().getFullYear()}</div>
      </footer>
    </>
  )
}

export default Layout
