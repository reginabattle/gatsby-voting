import React from "react"
import Card from "./card"

const CharityList = ({ charities }) => {
  return (
    <div className="charity-list">
      {charities.map(item => {
        const { charity } = item
        return <Card key={item.id} title={item.title} data={charity.details} />
      })}
    </div>
  )
}

export default CharityList
