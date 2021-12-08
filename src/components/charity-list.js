import React, { useState } from "react"
import Card from "./card"
import Button from "./button"
import { updateCount, updateVisits } from "../utils/api"
import publicIp from "public-ip"

const CharityList = ({ charities, visits }) => {
  const [vote, setVote] = useState("")
  const [count, setCount] = useState(0)
  const [currentIp, setCurrentIp] = useState("")

  ;(async () => {
    const ip = await publicIp.v4()
    setCurrentIp(ip)
  })()

  const handleClick = (id, votes) => {
    setVote(id)
    setCount(votes)
    updateVisits(visits.ipAddresses, currentIp)
  }

  const handleSubmit = (e, id) => {
    if (!e.target.disabled) {
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
