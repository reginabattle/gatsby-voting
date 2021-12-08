import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <StaticImage
          className="footer__logo"
          src="../assets/images/logo.svg"
          alt="Strategic Technology"
          placeholder="none"
        />
      </div>
    </footer>
  )
}

export default Footer
