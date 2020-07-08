import React, {useEffect, useState} from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import Description from '../../Scene-component/Description';


const classNames = require('classnames');

export default function BusSixth(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "Turning on your flashlights, you take a deep breath and enter. You stick together, searching the store for anything of use. After a few minutes you find a first aid kit and put it in your bag. You spend a few more minutes looking around but don’t find much else. You return to the bus and set off towards the hospital.";

  const testDesc = "Hello my name is blah Hello my name is blah Hello my name is blah"

  return (
    <div className='scene-layout'>
      <Description className='descripton-layout' setShow={setShow} text={sceneDescription} maxLen={55}></Description>
      <ButtonNext scene={"fifth"} transition={props.transition}></ButtonNext>
    </div>
  )
}