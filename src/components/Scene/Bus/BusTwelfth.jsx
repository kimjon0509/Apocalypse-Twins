import React, {useEffect, useState} from "react";
import GameOver from "../GameOver/GameOverScreen"
import Description from "../../Scene-component/Description"
import ButtonChoice from "../../Scene-component/ButtonChoice"
import HealthBar from "../../Scene-component/HealthBar"
const classNames = require('classnames');

export default function BusFirst(props) {
  const sceneDescription = "You both leave the bus and drop down into a small ditch beside the road. There’s a storm drain passing beneath the road, and you climb inside. Above, you hear the vehicle pull over beside the bus. The sounds of two car doors opening. You hear the bus doors open, then close. Two faint clicks. Footsteps getting nearer to the ditch. You hold your breath. The beam of a flashlight passes over the area, stopping on the storm drain entrance. It gets brighter as it nears. Shining the light inside, two figures cry out, startled, and fire several shots. All goes dark as you lose consciousness…";

  const testDesc = "Hello my name is blah Hello my name is blah Hello my name is blah"

  function usePuzzleToChoices(initial) {
  const [history, setHistory] = useState([initial]);

function transition(changeMode, replace = false) {
  setHistory(prev => {
    if (replace) {
      return [changeMode, ...prev.slice(1)];
    } else {
      return [changeMode, ...prev];
    }
  });
}

function back() {
  setHistory(prev => {
    if (prev.length > 1) {
      return prev.slice(1);
    } else {
      return prev;
    }
  });
}

return {mode: history[0], transition, back };
}

const CHOICES = 'Choices'

const { mode, transition } = usePuzzleToChoices('Choices')
const [show, setShow] = useState(false)
const styleShow = show ? {} : {visibility: 'hidden'}
  
  return (
    
    <div className='scene-layout'>
      <div className='heart-right'>
      <div style={styleShow} className='show-animation'>
          {<HealthBar heart={props.heart} ></HealthBar>}
        </div>
        </div>
      <Description className='descripton-layout' setShow={setShow} puzzleToChoices={transition} text={sceneDescription} maxLen={55}></Description>
      <div style={styleShow} className='show-animation'>
      {mode === CHOICES &&
        <>
          <ButtonChoice scene={"dead"} sceneTransition={props.sceneTransition} choice={"Next"}></ButtonChoice>
        </>
      }
      </div>
    </div>
  )
}