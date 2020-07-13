import React, {useState} from "react"
import "./HealthBar.scss"
import HeartFull from "./HeartFull"
import HeartEmpty from "./HeartEmpty"
import GameOver from "../Scene/GameOver/GameOverScreen"

export default function HealthBar(props) {

  return (
    <div className="healthbar">
      {props.heart}
      {/* <button onClick={() => setHealth(health - 1)}></button>
      <button onClick={() => setHealth(health + 1)}></button> */}
    </div>
  )
}