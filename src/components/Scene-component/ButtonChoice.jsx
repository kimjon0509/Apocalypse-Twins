import React from "react";
import './ButtonChoice.scss'

export default function ButtonChoice(props) {

  return (
    <div className="choices">
      <p className='next' onClick={() => {props.transition(props.scene)}}>
        {props.choice}
      </p>
    </div>
  )
}