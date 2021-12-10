import React from "react"
import { graphql } from "gatsby"
import { useCookies } from "react-cookie"
import Layout from "../components/layout"
import Hero from "../components/hero"
import CharityList from "../components/charity-list"
import "../styles/main.scss"

const Home = ({ data }) => {
  const { headline, description, image, charities } = data.wpPage.home
  const [cookies, setCookie] = useCookies(process.env.GATSBY_COOKIE)
  const hasVoted = cookies[process.env.GATSBY_COOKIE] === "hasVoted"

  const addCookie = () => {
    setCookie("STS_GIVES_BACK", "hasVoted", {
      path: "/",
    })
  }

  return (
    <Layout>
      <Hero headline={headline} description={description} image={image} />
      {charities && (
        <CharityList
          charities={charities}
          hasVoted={hasVoted}
          callback={addCookie}
        />
      )}
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    wpPage(isFrontPage: { eq: true }) {
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
