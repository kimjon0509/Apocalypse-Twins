import React, {useEffect, useState} from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';
import {webSocket} from '../../../webSocket'
const classNames = require('classnames');
// need to add gas state, whether the player has gas or not
export default function BusThird(props) {
  const [show, setShow] = useState(false)
  const sceneDescription1 = "You receive a mental image of a key taped to the underside of a bus seat. Checking the seats, you find your vision to be true. Key in hand, you try the ignition. It takes a while, but the bus roars to life. In response to the engine, you hear screeching nearby, coming in your direction. You slam down the pedal and veer onto the street, not cognisant of where you’re going. The zombies you pass give chase, but quickly fall behind…";
  const sceneDescription2 = "After the adrenaline fades and you’ve been driving for a while, you spot a gas station ahead. The hospital isn’t near your apartment and you need directions. You find a torn up map on a board outside the convenience store and write down directions. Before leaving, you both eye the darkened interior of the convenience store. Having brought flashlights, you contemplate going in. Your minds tingle in warning, but it’s unclear from which course..."
  const testDesc = "Hello i got the key and now im at the gas station"

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
      socketPuzzleToChoices={props.socketPuzzleToChoices}
      socketSceneTransition={props.socketSceneTransition}
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
      <Description className='descripton-layout' setShow={setShow} text={sceneDescription2} maxLen={55}></Description>
      {mode === PUZZLE &&
        <div style={styleShow} className='show-animation'>
          {<KeywordDisplay 
          keyword={'gas'} 
          style={styleShow} 
          transition={transition}
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
        choice={'Check the convience store'} 
        scene={'sixth'} 
        sceneTransition={props.sceneTransition}
        socketSceneTransition={props.socketSceneTransition}
        >
        </ButtonChoice>
        <ButtonChoice 
        choice={'Go back to bus'} 
        scene={'seventh'} 
        sceneTransition={props.sceneTransition}
        socketSceneTransition={props.socketSceneTransition}
        >
        </ButtonChoice>
        </>
      }
    </div>
  )
}