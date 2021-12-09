import React, { useState } from "react"
import Card from "./card"
import Button from "./button"
import Loader from "./loader"
import { updateCount } from "../utils/api"

const CharityList = ({ charities, hasVoted, callback }) => {
  const [vote, setVote] = useState("")
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleClick = (id, votes) => {
    setVote(id)
    setCount(votes)
  }

  const handleSubmit = (e, id) => {
    if (!loading) {
      setLoading(true)
      updateCount(e, id, count)
      callback()
    }
  }

  return (
    <>
      <div className="charity-list">
        {charities.map(item => {
          const { databaseId: id, title, votes } = item
          const { count } = votes

          return (
            <Card
              key={id}
              title={title}
              data={item}
              callback={() => handleClick(id, count)}
              isActive={id === vote}
            />
          )
        })}
      </div>

      <div className="charity-list__button">
        <Button
          onClick={e => handleSubmit(e, vote)}
          disabled={loading || hasVoted}
        >
          {loading ? <Loader /> : "Support"}
        </Button>
      </div>

      <div className="charity-list__message">
        <p>{hasVoted && "Sorry, it looks like you've already voted!"}</p>
      </div>
    </>
  )
}

export default CharityList
