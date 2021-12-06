import React from "react"
import Card from "./card"

const CharityList = ({ charities }) => {
  const handleClick = title => {
    console.log(title)
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
