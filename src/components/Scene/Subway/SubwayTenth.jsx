import React, {useEffect, useState} from "react";
import Description from '../../Scene-component/Description';
import HealthBar from '../../Scene-component/HealthBar';

import {webSocket} from '../../../webSocket';

export default function SubwayFourth(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "Opening the door, you see a metal staircase winding tightly upward. You climb the steps, your footsteps echoing lightly. Every few seconds you glance down through the metal links to make sure you’re not being followed. At the top, you reach another door. Opening it a crack, a fresh breeze washes over you. You can see the hospital like a beacon above the rooftops a short distance from here. You made it.";

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
      webSocket.off('show best path');
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
    </div>
  )
}