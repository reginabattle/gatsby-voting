import React from "react"

const Hero = ({ headline, description, image }) => {
  return (
    <div className="hero">
      {image && (
        <img className="hero__icon" src={image.sourceUrl} alt={image.altText} />
      )}
      <h1 className="hero__headline">{headline}</h1>
      <div
        className="hero__description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  )
}

export default Hero
