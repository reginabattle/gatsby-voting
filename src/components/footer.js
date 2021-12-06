import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query logoQuery {
      image: wpMediaItem(slug: { eq: "sti-logo" }) {
        slug
        sourceUrl
        altText
      }
    }
  `)

  const { image } = data
  return (
    <footer className="footer">
      <div className="container">
        {image && (
          <img
            className="footer__logo"
            src={image.sourceUrl}
            alt={image.altText}
          />
        )}
      </div>
    </footer>
  )
}

export default Footer
