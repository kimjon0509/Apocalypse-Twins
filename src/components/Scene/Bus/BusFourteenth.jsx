import React, {useEffect, useState} from "react";
import Description from '../../Scene-component/Description';


const classNames = require('classnames');

export default function BusTenth(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "The vehicle slows and stops beside the bus. You see two men step out, pistols in their holsters. They call out. You both step out as well, also keeping your weapons stowed. You begin to speak with these strangers. Tensions are high in the beginning, but as you both speak your intentions, you sense they are decent people, just trying to survive. They offer to drop you off at the hospital since they’re going the same way. With no other options, and feeling these strangers are somewhat trustworthy, you get your things from the bus and climb into the backseat of the car. Eventually you reach the city and the hospital. You made it.";

  const testDesc = "Hello he was nice so he drove us to hospital"
  return (
    <div className='scene-layout'>
      <Description className='descripton-layout' setShow={setShow} text={sceneDescription} maxLen={55}></Description>
    </div>
  )
}