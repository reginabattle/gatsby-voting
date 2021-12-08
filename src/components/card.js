import React from "react"

const Card = ({ title, data, callback }) => {
  const { description, website, logo } = data.charity.details

  return (
    <div
      className="charity-card"
      onClick={callback}
      onKeyPress={e => e.key === 13 && callback()}
      role="button"
      tabIndex="0"
    >
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
      <a
        href={website}
        aria-label={`Learn more about ${title}`}
        target="_blank"
        rel="noreferrer"
      >
        Learn more
      </a>
    </div>
  )
}

export default Card
