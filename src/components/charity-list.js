import React, { useState } from "react"
import publicIp from "public-ip"
import Card from "./card"
import Button from "./button"
import Loader from "./loader"
import { updateCount, updateVisits } from "../utils/api"

const CharityList = ({ charities, visits }) => {
  ;(async () => {
    const ip = await publicIp.v4()
    ip && setCurrentIp(ip)
  })()

  const [vote, setVote] = useState("")
  const [count, setCount] = useState(0)
  const [currentIp, setCurrentIp] = useState("")
  const [loading, setLoading] = useState(false)

  const { ipAddresses } = visits

  const handleClick = (id, votes) => {
    setVote(id)
    setCount(votes)
    // updateVisits(ipAddresses, currentIp)
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
