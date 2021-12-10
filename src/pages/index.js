import React, { useState } from "react"
import { graphql } from "gatsby"
import publicIp from "public-ip"
import { updateVisits } from "../utils/api"
import Layout from "../components/layout"
import Hero from "../components/hero"
import CharityList from "../components/charity-list"
import "../styles/main.scss"

const Home = ({ data }) => {
  const { headline, description, image, charities } = data.wpPage.home
  const { ipAddresses } = data.wpPage.visits
  const [currentIp, setCurrentIp] = useState("")

  ;(async () => {
    const ip = await publicIp.v4()
    ip && setCurrentIp(ip)
  })()

  const getVoteStatus = () => {
    const hasVoted = ipAddresses && ipAddresses.includes(currentIp)
    return hasVoted
  }

  const filtered =
    ipAddresses &&
    ipAddresses
      .split(", ")
      .filter(a => a !== "null" && a !== "null,")
      .filter(a => a !== currentIp)

  const visits = `${filtered}, ${currentIp}`
  const voteStatus = getVoteStatus()

  return (
    <Layout>
      <Hero headline={headline} description={description} image={image} />
      {charities && (
        <CharityList
          charities={charities}
          hasVoted={voteStatus}
          callback={() => updateVisits(visits)}
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
