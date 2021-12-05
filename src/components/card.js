import React from "react"
import { Link } from "gatsby"

const Card = ({ title, data }) => {
  const { description, website, logo } = data
  return (
    <div className="charity-card">
      <img
        className="charity-card__image"
        src={logo.sourceUrl}
        alt={logo.altText}
      />
      <h2>{title}</h2>
      <div
        className="charity-card__description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <Link to={website} aria-label={`Learn more about ${title}`}>
        Learn more
      </Link>
    </div>
  )
}

export default Card
