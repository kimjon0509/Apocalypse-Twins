import React, { useEffect, useState } from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';
import {webSocket} from '../../../webSocket'
const classNames = require('classnames');

export default function BusFirst(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "You’re driving down a country road, on your way to the hospital. It’s pitch dark out. For a moment you both just take in the nighttime scenery, relaxed after the stress of what you’ve already been through today. Glancing in your rearview mirror, you notice lights. Headlights. Gaining fast. Instinctively, you both join minds, seeking to unveil the safest course…";

  const testDesc = "Hello I'm in the country road now"

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

  const [path, setPath] = useState(false)
  const buttonClass = classNames("button", {
    "correct-path": path,
  });
  const PUZZLE = 'Puzzle'
  const CHOICES = 'Choices'
  const styleShow = show ? {} : { visibility: 'hidden' }
  const { mode, transition } = usePuzzleToChoices('Puzzle')
  useEffect ( () => { 
    webSocket.on('puzzle to choices', (message) => {
      transition(message);
    });
  
    webSocket.on('show best path', (message) => {
      setPath(message)
    });
  }, [])

  return (
    <div className='scene-layout'>
      {show ? <Timer 
      puzzleToChoices={transition} 
      socketSceneTransition={props.socketSceneTransition}
      socketPuzzleToChoices={props.socketPuzzleToChoices}
      >
      </Timer> : <div className='timer-dummy'></div>}
      <div style={styleShow} className='show-animation'>
        <div className='heart-right'>
          {<HealthBar heart={props.heart} style={styleShow} ></HealthBar>}
        </div>
      </div>
      <Description className='descripton-layout' setShow={setShow} text={sceneDescription} maxLen={55}></Description>
      {mode === PUZZLE &&
        <div style={styleShow} className='show-animation'>
          {<KeywordDisplay 
          keyword={'calm'} 
          style={styleShow} 
          puzzleToChoices={transition} 
          sceneTransition={props.sceneTransition} 
          setPath={setPath} 
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
          choice={'Take a nearby side road, and continue driving(gas)'} 
          scene={'eighth'} 
          sceneTransition={props.sceneTransition}
          socketSceneTransition={props.socketSceneTransition}
          >
          </ButtonChoice>
          <ButtonChoice 
          choice={'Stop the bus'} 
          scene={'ninth'} 
          sceneTransition={props.sceneTransition}
          socketSceneTransition={props.socketSceneTransition}
          >
          </ButtonChoice>
        </>
      }
    </div>
  )
}