import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Button from "../components/button"
import { resetCount } from "../utils/api"

const Votes = ({ data }) => {
  const charities = data.page.nodes
  const [pass, setPass] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)

  const handleClick = () => {
    if (isAdmin) {
      charities.map(item => resetCount(item.databaseId))
    }
    setIsAdmin(false)
  }

  const handleChange = e => {
    setPass(e.target.value)
  }

  useEffect(() => {
    if (pass === process.env.GATSBY_JWT_PASSWORD) {
      setIsAdmin(true)
    } else {
      setIsAdmin(false)
    }
  }, [pass])

  return (
    <Layout>
      <div className="page-content">
        <h1>Vote Count</h1>
        <p>Set the vote count for all fields back to zero.</p>

        <div className="vote-count">
          {charities.map(item => {
            const { title, votes, databaseId: id } = item
            const { count } = votes
            return (
              <div className="vote-count__charity" key={id}>
                <h3 className="vote-count__charity-title">{title}</h3>
                <p className="vote-count__charity-count">
                  {count === null ? 0 : count}
                </p>
              </div>
            )
          })}
        </div>

        <div className="vote-reset">
          {!isAdmin && (
            <input
              type="text"
              onChange={handleChange}
              value={pass}
              placeholder="Enter password to reset"
            />
          )}

          {isAdmin && (
            <>
              <label className="sr-only" htmlFor="reset" hidden>
                Reset the vote count
              </label>
              <Button onClick={handleClick}>Reset</Button>
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Votes

export const pageQuery = graphql`
  query {
    page: allWpCharity(sort: { fields: title, order: ASC }) {
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
