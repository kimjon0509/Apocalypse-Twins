import React, {useEffect, useState} from "react";
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import HealthBar from '../../Scene-component/HealthBar';

import {webSocket} from '../../../webSocket';

export default function SubwayFirst(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "Lifting the man between you, you get him inside and pull yourselves in just as your psychic shroud fails. The bell chimes and the doors close a second before the zombies hurl themselves into the train. They slam against the windows, their rotting faces pressed against the glass. You rush to the driver’s compartment and hit the throttle. The zombies fall away as you pick up speed and continue into the tunnel.";

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
          {<HealthBar
            style={styleShow}
            heart={props.heart}
          ></HealthBar>}
        </div>
      </div>
      <Description 
        className='descripton-layout' 
        text={sceneDescription} 
        maxLen={55}

        socketSetShow={props.socketSetShow}
      ></Description>
      <div style={styleShow} className='show-animation'>
        <div className='heart-right'>
        {mode === CHOICES && 
          <>
            <ButtonChoice 
              choice={"Next"} 
              scene={'eighth'} 
              socketSceneTransition={props.socketSceneTransition}
            ></ButtonChoice>
          </>
        }
        </div>
      </div>
    </div>
  )
}