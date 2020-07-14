import React, {useEffect, useState} from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';
import {webSocket} from '../../../webSocket'
const classNames = require('classnames');

export default function BusSeventh(props) {
  const [show, setShow] = useState(false)
  // maybe add next to scene?
  const sceneDescription = "You return to the bus and set off towards the hospital...\n You’re driving down a country road, on your way to the hospital. It’s pitch dark out. For a moment you both just take in the nighttime scenery, relaxed after the stress of what you’ve already been through today. Glancing in your rearview mirror, you notice lights. Headlights. Gaining fast. Instinctively, you both join minds, seeking to unveil the safest course.";

  const testDesc = "Hello we are in country road, take path or stop"

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
  const [path, setPath] = useState(false)
  const buttonClass = classNames("button", {
    "correct-path": path,
  });
  const PUZZLE = 'Puzzle'
  const CHOICES = 'Choices'
  const styleShow = show ? {} : {visibility: 'hidden'}
  
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
  const { mode, transition } = usePuzzleToChoices('Puzzle')
  return (
    <div className='scene-layout'>
      {show ? <Timer 
      socketSceneTransition={props.socketSceneTransition}
      socketPuzzleToChoices={props.socketPuzzleToChoices}
      >
      </Timer> : <div className='timer-dummy'></div>}
      <div style={styleShow} className='show-animation'>
        <div className='heart-right'>
          {<HealthBar 
          heart={props.heart} 
          style={styleShow} >
          </HealthBar>}
        </div>
      </div>
      <Description className='descripton-layout' socketSetShow={props.socketSetShow} text={sceneDescription} maxLen={55}></Description>
      {mode === PUZZLE &&
        <div style={styleShow} className='show-animation'>
          {<KeywordDisplay 
          keyword={'calm'} 
          style={styleShow} 
           //socket functions
          socketSetInput={props.socketSetInput}
          socketPuzzleToChoices={props.socketPuzzleToChoices}
          socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
          socketSceneTransition={props.socketSceneTransition}
          socketSetPath={props.socketSetPath}
           
          playerId={props.playerId}
          playerArr={props.playerArr}
          >
            </KeywordDisplay>}
        </div>
      }
      {mode === CHOICES && 
        <>
        <ButtonChoice 
        correctPath={buttonClass} 
        choice={'Take a nearby side road and continue driving'} 
        scene={'eighth'} 
        socketSceneTransition={props.socketSceneTransition}
        >
        </ButtonChoice>
        <ButtonChoice 
        choice={'Stop the bus'} 
        scene={'ninth'} 
        socketSceneTransition={props.socketSceneTransition}
        >
        </ButtonChoice>
        </>
      }
    </div>
  )
}