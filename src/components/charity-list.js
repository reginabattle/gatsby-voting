import React, { useState } from "react"
import Card from "./card"
import Button from "./button"
import { fetchAPI } from "../utils/api"

const CharityList = ({ charities }) => {
  const [vote, setVote] = useState()
  const [count, setCount] = useState(0)

  const handleClick = id => {
    fetchAPI(`${process.env.API_URL}/${id}`).then(res => {
      setVote(id)
      setCount(res.acf.count)
    })
  }

  const handleSubmit = e => {
    !e.target.disabled &&
      fetch(`${process.env.API_URL}/${vote}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + process.env.JWT_TOKEN,
        },
        body: JSON.stringify({
          acf: {
            count: count + 1,
          },
        }),
      }).then(res => {
        console.log("res", res)
        e.target.disabled = true
      })
  }

  return (
    <>
      <div className="charity-list">
        {charities.map(item => {
          const { databaseId: id, title } = item
          return (
            <Card
              key={id}
              title={title}
              data={item}
              callback={() => handleClick(id)}
            />
          )
        })}
      </div>

      <div className="charity-list__button">
        <Button label="Support" onClick={e => handleSubmit(e)} />
      </div>
    </>
  )
}

export default CharityList
