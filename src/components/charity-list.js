import React, { useState } from "react"
import Card from "./card"

const CharityList = ({ charities }) => {
  const [vote, setVote] = useState()

  const handleClick = title => {
    console.log("vote", title)
    setVote(title)
  }

  return (
    <div className="charity-list">
      {charities.map(item => {
        const { charity } = item
        return (
          <Card
            key={item.id}
            title={item.title}
            data={charity.details}
            callback={handleClick}
          />
        )
      })}
    </div>
  )
}

export default CharityList
