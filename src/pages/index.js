import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import CharityList from "../components/charity-list"
import "../styles/main.scss"

const Home = ({ data }) => {
  const { headline, description, image, charities } = data.wpPage.home
  return (
    <Layout>
      <Hero headline={headline} description={description} image={image} />
      <CharityList charities={charities} />
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    wpPage(title: { eq: "Home" }) {
      home {
        headline
        description
        image {
          sourceUrl
          altText
        }
        charities {
          ... on WpCharity {
            id
            title
            charity {
              details {
                description
                website
                logo {
                  altText
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
`
