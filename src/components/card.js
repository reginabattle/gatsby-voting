import React from "react"
import classNames from "classnames"

const Card = ({ title, data, callback, isActive }) => {
  const { description, website, logo } = data.charity.details

  const cardClasses = classNames({
    "charity-card": true,
    "--active": isActive,
  })

  return (
    <div
      className={cardClasses}
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
