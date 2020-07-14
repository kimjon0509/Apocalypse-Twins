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
  const sceneDescription = "You sense a side road just ahead and swerve onto it. Killing the engine and lights, you listen to the car approach. As it reaches the side road, it speeds past and you breathe a sigh of relief. You continue, avoiding the main road, and eventually reach the city and the hospital. You made it.";

  const testDesc = "Hello my name is blah Hello my name is blah Hello my name is blah"

  return (
    <div className='scene-layout'>
      <Description className='descripton-layout' socketSetShow={props.socketSetShow} text={sceneDescription} maxLen={55}></Description>
    </div>
  )
}