import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/card"
import "../styles/main.scss"

const Home = ({ data }) => {
  const { home } = data.wpPage
  return (
    <Layout>
      <h1>{home.headline}</h1>
      <div dangerouslySetInnerHTML={{ __html: home.description }} />

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
