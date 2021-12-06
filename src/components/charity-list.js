import React, { useState } from "react"
import Card from "./card"
import Button from "./button"

const CharityList = ({ charities }) => {
  const [vote, setVote] = useState()

  const handleClick = title => {
    console.log("vote", title)
    setVote(title)
  }

  const handleSubmit = () => {
    console.log("submitted")
  }

  return (
    <>
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

      <Button
        className="charity-list__button"
        label="Support"
        onClick={handleSubmit}
      />
    </>
  )
}

export default CharityList
