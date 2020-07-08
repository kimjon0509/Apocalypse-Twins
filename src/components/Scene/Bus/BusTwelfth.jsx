import React, {useEffect, useState} from "react";
import GameOver from "../GameOver/GameOverScreen"

const classNames = require('classnames');

export default function BusTwelfth(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "You both leave the bus and drop down into a small ditch beside the road. There’s a storm drain passing beneath the road, and you climb inside. Above, you hear the vehicle pull over beside the bus. The sounds of two car doors opening. You hear the bus doors open, then close. Two faint clicks. Footsteps getting nearer to the ditch. You hold your breath. The beam of a flashlight passes over the area, stopping on the storm drain entrance. It gets brighter as it nears. Shining the light inside, two figures cry out, startled, and fire several shots. All goes dark as you lose consciousness…";

  const testDesc = "Hello my name is blah Hello my name is blah Hello my name is blah"

  return (
    <div>
      <GameOver text={sceneDescription} maxLen={60}></GameOver>
    </div>
  )
}