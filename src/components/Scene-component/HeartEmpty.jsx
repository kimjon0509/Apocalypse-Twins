import React from "react"
import heartEmpty from "../../images/hud_heartEmpty.png"
import "./Hearts.scss"

export default function HeartFull(props) {
  return (
<div>
<img src={heartEmpty} alt="heart" className="heart"></img>
</div>
  )
}