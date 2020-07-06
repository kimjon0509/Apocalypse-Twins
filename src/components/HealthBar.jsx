import React from "react"
import "./HealthBar.scss"
import HeartFull from "./HeartFull"
import HeartEmpty from "./HeartEmpty"

export default function HealthBar(props) {
  let hearts = []
  for (let i = 0; i < props.health; i++) {
    hearts.push(
      <HeartFull />)
  }
  if (props.health < 3) {
    for (let j = 0; j < 3 - props.health; j++) {
      hearts.push(<HeartEmpty />)
    }
  }
  return (
    <div className="healthbar">
    {hearts}
    </div>
  )
}