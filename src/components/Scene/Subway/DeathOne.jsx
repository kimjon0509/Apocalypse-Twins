import React, {useEffect, useState} from "react";
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import HealthBar from '../../Scene-component/HealthBar';

import {webSocket} from '../../../webSocket';

export default function DeadOne(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "You hold out as long as you can, but lifting the man and trying to shroud your presence at the same time is too much. The pack catches your scent and they’re on you before you can get inside the train and close the doors. You try to haul yourself in, but it’s no good. The zombies pull you back and enjoy a fine meal of three warm bodies...";

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
    return {mode: history[0], transition};
  }

  const CHOICES = 'Choices'
  const styleShow = show ? {} : {visibility: 'hidden'}
  const { mode, transition } = usePuzzleToChoices('Choices')

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
      <div style={styleShow} className='show-animation'>
        <div className='heart-right'>
          {<HealthBar style={styleShow} heart={props.heart}></HealthBar>}
        </div>
      </div>
      <Description 
        className='descripton-layout' 
        socketSetShow={props.socketSetShow}
        text={sceneDescription} 
        maxLen={55}
        
        ></Description>
      <div style={styleShow} className='show-animation'>
        <div className='heart-right'>
        {mode === CHOICES && 
        <>
          <ButtonChoice 
            choice={"Next"} 
            scene={'dead'} 
            socketSceneTransition={props.socketSceneTransition}
            
          ></ButtonChoice>
        </>
        }
        </div>
      </div>
    </div>
  )
}