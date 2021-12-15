import React, { useState } from "react"
import Button from "./button"
import Loader from "./loader"
import CharityCard from "./charity-card"
import { updateCount } from "../utils/api"

const CharityList = ({ charities, hasVoted, callback }) => {
  const [vote, setVote] = useState("")
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleClick = (id, votes) => {
    setError(false)
    setVote(id)
    setCount(votes)
  }

  const handleSubmit = (e, id) => {
    if (!loading && vote) {
      setLoading(true)
      updateCount(e, id, count)
      callback()
    } else if (!vote) {
      setError(true)
    }
  }

  return (
    <>
      <div className="charity-list">
        {charities.map(item => {
          const { databaseId: id, title, votes } = item
          const { count } = votes

          return (
            <CharityCard
              key={id}
              title={title}
              data={item}
              callback={() => handleClick(id, count)}
              isActive={id === vote}
            />
          )
        })}
      </div>

      {!hasVoted && (
        <div className="charity-list__button">
          <Button onClick={e => handleSubmit(e, vote)} disabled={loading}>
            {loading ? <Loader /> : "Support"}
          </Button>
        </div>
      )}

      {(hasVoted || error) && (
        <div className="charity-list__message">
          <p>
            {hasVoted && "It looks like you've already voted."}
            {error && "Oops, you forgot to select a charity."}
          </p>
        </div>
      )}
    </>
  )
}

export default CharityList
