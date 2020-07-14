import React, {useEffect, useState} from "react";
import GameOver from "../GameOver/GameOverScreen"
import Description from "../../Scene-component/Description"
import ButtonChoice from "../../Scene-component/ButtonChoice"
import HealthBar from "../../Scene-component/HealthBar"
import {webSocket} from '../../../webSocket'

const classNames = require('classnames');
export default function BusFourth(props) {
  const sceneDescription = "Turning on your flashlights, you take a deep breath and enter. You stick together, searching the store for anything of use. After a few minutes you find a first aid kit and put it in your bag. You spend a few more minutes looking around but don’t find much else. As you step outside, you both realize your mistake. You see a pack of zombies running towards the bus, drawn by the sound of the idling engine. As they near, they catch sight of you and charge, howling. You try to fight them off, but there are too many. You make it halfway to the bus before they manage to drag you to the ground and feast on your living flesh...";

  const testDesc = "Hello i have died because i was too loud at the gas station"
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
  useEffect(() => {
    webSocket.on('puzzle to choices', (message) => {
      transition(message);
    });
      
    webSocket.on('show', (message) => {
      setShow(message);
    });

    return function cleanup() {
      webSocket.off('puzzle to choices');
      webSocket.off('show');
    }
  }, [])
  return (
    <div className='scene-layout'>
      <div className='heart-right'>
      <div style={styleShow} className='show-animation'>
          {<HealthBar heart={props.heart} ></HealthBar>}
        </div>
        </div>
      <Description className='descripton-layout' socketSetShow={props.socketSetShow} puzzleToChoices={transition} text={sceneDescription} maxLen={55}></Description>
      <div style={styleShow} className='show-animation'>
      {mode === CHOICES &&
        <>
          <ButtonChoice 
          scene={"dead"}  
          choice={"Next"}
          socketSceneTransition={props.socketSceneTransition}
          >
          </ButtonChoice>
        </>
      }
      </div>
    </div>
  )
}