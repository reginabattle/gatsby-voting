import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/card"
import Hero from "../components/hero"
import "../styles/main.scss"

const Home = ({ data }) => {
  const { home } = data.wpPage
  return (
    <Layout>
      <Hero
        headline={home.headline}
        description={home.description}
        image={home.image}
      />

      <div className="charity-card-list">
        {home.charities.map(item => {
          const { charity } = item
          return (
            <Card key={item.id} title={item.title} data={charity.details} />
          )
        })}
      </div>
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
