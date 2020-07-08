import React, {useEffect, useState} from "react";
import GameOver from "../GameOver/GameOverScreen"

const classNames = require('classnames');

export default function BusFourth(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "Turning on your flashlights, you take a deep breath and enter. You stick together, searching the store for anything of use. After a few minutes you find a first aid kit and put it in your bag. You spend a few more minutes looking around but don’t find much else. As you step outside, you both realize your mistake. You see a pack of zombies running towards the bus, drawn by the sound of the idling engine. As they near, they catch sight of you and charge, howling. You try to fight them off, but there are too many. You make it halfway to the bus before they manage to drag you to the ground and feast on your living flesh...";

  const testDesc = "Hello i have died because i was too loud at the gas station"

  return (
    <div>
      <GameOver text={testDesc} maxLen={60}></GameOver>
    </div>
  )
}