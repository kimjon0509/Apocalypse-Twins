import React, {useState} from "react"
import "./HealthBar.scss"
import HeartFull from "./HeartFull"
import HeartEmpty from "./HeartEmpty"
import GameOver from "../Scene/GameOver/GameOverScreen"

export default function HealthBar(props) {
  const [health, setHealth] = useState(props.health)
  let hearts = []
  for (let i = 0; i < health; i++) {
    hearts.push(
      <HeartFull />)
  }
  if (health < 3) {
    for (let j = 0; j < 3 - health; j++) {
      hearts.push(<HeartEmpty />)
    }
  }

  if (health < 1) {
    return (
      <div>
        GAME OVER
      </div>
    )
  }

  return (
    // buttons are used for testing health state
    <div className="healthbar">
      {hearts}
      {/* <button onClick={() => setHealth(health - 1)}></button>
      <button onClick={() => setHealth(health + 1)}></button> */}
    </div>
  )
}