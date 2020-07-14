import React, { useEffect, useState } from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import Description from '../../Scene-component/Description';
import HealthBar from '../../Scene-component/HealthBar';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import {webSocket} from '../../../webSocket';

const classNames = require('classnames');

export default function BusSixth(props) {

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

    return { mode: history[0], transition, back };
  }

  const CHOICES = 'Choices'

  const { mode, transition } = usePuzzleToChoices('Choices')
  const [show, setShow] = useState(false)
  const styleShow = show ? {} : { visibility: 'hidden' }
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

  const sceneDescription = "Turning on your flashlights, you take a deep breath and enter. You stick together, searching the store for anything of use. After a few minutes you find a first aid kit and put it in your bag. You spend a few more minutes looking around but don’t find much else. You return to the bus and set off towards the hospital.";

  const testDesc = "Hello my name is blah Hello my name is blah Hello my name is blah"
  return (
    <div className='scene-layout'>
      <div className='heart-right'>
        <div style={styleShow} className='show-animation'>
          {<HealthBar heart={props.heart} ></HealthBar>}
        </div>
      </div>
      <Description className='descripton-layout' socketSetShow={props.socketSetShow}  text={sceneDescription} maxLen={55}></Description>
      <div style={styleShow} className='show-animation'>
        {mode === CHOICES &&
          <>
            <ButtonChoice 
            scene={"fifth"} 
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