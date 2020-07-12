import React, {useEffect, useState} from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';

import {webSocket} from '../../../webSocket';

const classNames = require('classnames');

export default function DockSixth(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "You rush the boaters, shoving one into the water and grappling with the other two. You manage to get them to the ground, but not without taking a few bruises. Hurrying onto the boat, you start the ignition and pull away before they can recover, speeding toward the hospital… Eventually, you make it and get the supplies you need.";

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
  const { mode, transition } = usePuzzleToChoices('Choices')

  const [path, setPath] = useState(false)
  const buttonClass = classNames("button", {
    "correct-path": path,
  });

  webSocket.on('puzzle to choices', (message) => {
    transition(message);
  });

  return (
    <div className='scene-layout'>
      {show ?
        <Timer
          puzzleToChoices={transition}
          addHeart={props.addHeart}
          removeHeart={props.removeHeart}

          // SOCKETS
          socketPuzzleToChoices={props.socketPuzzleToChoices}
          socketSceneTransition={props.socketSceneTransition}>
        </Timer> : <div className='timer-dummy'></div>}

      <div style={styleShow} className='show-animation'>
        <div className='heart-right'>
          {<HealthBar 
            heart={props.heart}
            style={styleShow}>   
          </HealthBar>}
        </div>
      </div>
      <Description 
        className='descripton-layout'
        setShow={setShow}
        text={sceneDescription}
        maxLen={55}>
      </Description>
      {mode === CHOICES && 
        <>
          <ButtonChoice 
            choice={'Return to Title'} 
            scene={'start'} 
            sceneTransition={props.sceneTransition}
            
            // SOCKETS
            socketSceneTransition={props.socketSceneTransition}>
          </ButtonChoice>
        </>
      }
    </div>
  )
}