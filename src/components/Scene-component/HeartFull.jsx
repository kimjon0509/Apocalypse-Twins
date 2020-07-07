import React from "react"
import heartFull from "../../images/hud_heartFull.png"
import "./Hearts.scss"
export default function HeartFull(props) {
  return (
<div >
<img src={heartFull} alt="heart" className="heart"></img>
</div>
  )
}