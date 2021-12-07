import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import CharityList from "../components/charity-list"
import "../styles/main.scss"

const Home = ({ data }) => {
  const { headline, description, image, charities } = data.wpPage.home
  const { visits } = data.wpPage

  return (
    <Layout>
      <Hero headline={headline} description={description} image={image} />
      {charities && <CharityList charities={charities} visits={visits} />}
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
        charities {
          ... on WpCharity {
            id
            databaseId
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
            votes {
              count
            }
          }
        }
        image {
          altText
          sourceUrl
        }
      }
      visits {
        ipAddresses
      }
    }
  }
`
