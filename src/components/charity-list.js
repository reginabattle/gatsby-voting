import React, { useState } from "react"
import Card from "./card"
import Button from "./button"
import Loader from "./loader"
import { updateCount } from "../utils/api"

const CharityList = ({ charities, visits }) => {
  const [vote, setVote] = useState("")
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleClick = (id, votes) => {
    setVote(id)
    setCount(votes)
  }

  const handleSubmit = (e, id) => {
    if (!e.target.disabled) {
      e.target.disabled = true
      setLoading(true)
      updateCount(e, id, count)
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
        <Button onClick={e => handleSubmit(e, vote)}>
          {loading ? <Loader /> : "Support"}
        </Button>
      </div>
    </>
  )
}

export default CharityList
