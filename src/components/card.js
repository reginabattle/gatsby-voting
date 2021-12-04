import React from "react"
import { Link } from "gatsby"

const Card = ({ title, data }) => {
  const { description, website } = data
  return (
    <div className="charity-card">
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      <Link to={website}>Learn more</Link>
    </div>
  )
}

export default Card
