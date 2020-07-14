import React, { useEffect, useState } from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';
import {webSocket} from '../../../webSocket'
const classNames = require('classnames');

export default function BusNinth(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "Realizing you can’t outrun the vehicle, you pull over. You both work quickly to perceive the dangerousness of the oncoming driver and begin to channel your powers...";

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



    return { mode: history[0], transition };
  }
  const [path, setPath] = useState(false)
  const buttonClass = classNames("button", {
    "correct-path": path,
  });
  const PUZZLE = 'Puzzle'
  const CHOICES = 'Choices'
  const styleShow = show ? {} : { visibility: 'hidden' }
  const { mode, transition } = usePuzzleToChoices('Puzzle')

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
      {show ? <Timer 
      socketPuzzleToChoices={props.socketPuzzleToChoices}
      socketSceneTransition={props.socketSceneTransition}
      ></Timer> : <div className='timer-dummy'></div>}
      <div style={styleShow} className='show-animation'>
        <div className='heart-right'>
          {<HealthBar heart={props.heart} style={styleShow} ></HealthBar>}
        </div>
      </div>
      <Description className='descripton-layout' socketSetShow={props.socketSetShow} text={sceneDescription} maxLen={55}></Description>
      {mode === PUZZLE &&
        <div style={styleShow} className='show-animation'>
          {<KeywordDisplay 
          keyword={'quick'} 
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
          choice={'Wait and see what the car does'} 
          scene={'tenth'} 
          socketSceneTransition={props.socketSceneTransition}
          >
          </ButtonChoice>
          <ButtonChoice 
          choice={'Attack'} 
          scene={'eleventh'} 
          socketSceneTransition={props.socketSceneTransition}
          >
          </ButtonChoice>
          <ButtonChoice 
          choice={'Hide'} 
          scene={'twelfth'} 
          socketSceneTransition={props.socketSceneTransition}
          >
          </ButtonChoice>
        </>
      }
    </div>
  )
}