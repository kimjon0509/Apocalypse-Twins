import React, {useEffect, useState} from "react";
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';

import {webSocket} from '../../../webSocket';

const classNames = require('classnames');

export default function SubwaySecond(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "You board the train and find it still operates. It groans to life and you depart the station, moving slowly as the headlights illuminate the tunnel ahead. As the tunnel begins to turn, you suddenly see a figure lying across the tracks. Who or what it might be, alive or dead, you can’t tell.\nYou join minds to try to foresee the danger of stopping to find out..";

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
  const PUZZLE = 'Puzzle'
  const CHOICES = 'Choices'
  const styleShow = show ? {} : {visibility: 'hidden'}
  const { mode, transition } = usePuzzleToChoices('Puzzle')

  const [path, setPath] = useState(false)
  const buttonClass = classNames("button", {
    "correct-path": path,
  });

  useEffect(() => {
    webSocket.on('puzzle to choices', (message) => {
      transition(message);
    });
    
    webSocket.on('show best path', (message) => {
      setPath(message)
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
      {show ? 
        <Timer
        socketPuzzleToChoices={props.socketPuzzleToChoices}
        socketSceneTransition={props.socketSceneTransition}
        ></Timer> : <div className='timer-dummy'></div>}
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
      {mode === PUZZLE &&
        <div style={styleShow} className='show-animation'>
          {<KeywordDisplay
          keyword={'pursued'}
          style={styleShow}

          socketSetInput={props.socketSetInput}
          socketPuzzleToChoices={props.socketPuzzleToChoices}
          socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
          socketSceneTransition={props.socketSceneTransition}
          socketSetPath={props.socketSetPath}
          
          playerId={props.playerId}
          playerArr={props.playerArr}
          ></KeywordDisplay>}
        </div>
      }
      {mode === CHOICES && 
        <>
        <ButtonChoice
        correctPath={buttonClass}
        choice={"don't stop"}
        scene={'fourth'}

        socketSceneTransition={props.socketSceneTransition}
        ></ButtonChoice>
        <ButtonChoice
        choice={'stop'}
        scene={'fifth'}
        socketSceneTransition={props.socketSceneTransition}
        ></ButtonChoice>
        </>
      }
    </div>
  )
}