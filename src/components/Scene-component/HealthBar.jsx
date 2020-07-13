import React from "react"
import "./HealthBar.scss"

export default function HealthBar(props) {

  return (
    <div className="healthbar">
      {props.heart}
    </div>
  )
}