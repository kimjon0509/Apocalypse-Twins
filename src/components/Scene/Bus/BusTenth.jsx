import React, {useEffect, useState} from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';

const classNames = require('classnames');

export default function BusFirst(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "The vehicle slows and stops beside the bus. You see two men step out, pistols in their holsters. They call out. You both step out as well, also keeping your weapons stowed. You begin to speak with these strangers. Tensions are high in the beginning, but as you both speak your intentions, you sense they are decent people, just trying to survive. They offer you supplies, and carry on their way. The tension leaves your body and you continue on your journey, eventually reaching the city and the hospital. You made it.";

  const testDesc = "Hello my name is blah Hello my name is blah Hello my name is blah"

  return (
    <div className='scene-layout'>
      <Description className='descripton-layout' setShow={setShow} text={sceneDescription} maxLen={55}></Description>
    </div>
  )
}