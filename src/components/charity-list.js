import React, { useState } from "react"
import Card from "./card"
import Button from "./button"
import { fetchAPI, postAPI } from "../utils/api"

const CharityList = ({ charities }) => {
  const [vote, setVote] = useState()
  const [count, setCount] = useState(0)

  const handleClick = id => {
    fetchAPI(`${process.env.API_URL}/${id}`).then(res => {
      setVote(id)
      setCount(res.acf.count)
    })
  }

  const handleSubmit = (e, id) => {
    !e.target.disabled && postAPI(id, count)
    e.target.disabled = true
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
        <Button label="Support" onClick={e => handleSubmit(e, vote)} />
      </div>
    </>
  )
}

export default CharityList
