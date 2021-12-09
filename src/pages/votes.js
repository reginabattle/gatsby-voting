import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { resetCount } from "../utils/api"

const Votes = ({ data }) => {
  const charities = data.page.nodes

  const handleClick = () => {
    charities.map(item => resetCount(item.databaseId))
  }

  return (
    <Layout>
      <div className="page-content">
        <h1 className="page-header">Vote Count</h1>
        <p>Set the vote count for all fields back to zero.</p>

        {charities.map(item => {
          const { title, votes, databaseId: id } = item
          const { count } = votes
          return (
            <div key={id}>
              <h2>{`${title}: ${count === null ? 0 : count}`}</h2>
            </div>
          )
        })}

        <label className="sr-only" htmlFor="reset" hidden>
          Reset
        </label>
        <button id="reset" name="reset" onClick={handleClick}>
          Reset
        </button>
      </div>
    </Layout>
  )
}

export default Votes

export const pageQuery = graphql`
  query MyQuery {
    page: allWpCharity {
      nodes {
        title
        databaseId
        votes {
          count
        }
      }
    }
  }
`
