import React, {useEffect, useState} from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';

import {webSocket} from '../../../webSocket';

const classNames = require('classnames');

export default function DockFourth(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "After about an hour under their watch, the door opens and a breathless boater rushes in. “Selena needs help.” \n “Shit. You two don’t move. Not that you can.” \n They exit the building, leaving the door open behind them. After a few minutes, you hear a shambling sound getting nearer to the open door… \n Together you attempt to loosen your bonds using telekinesis.";

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
  const { mode, transition } = usePuzzleToChoices('Puzzle')

  const [path, setPath] = useState(false)
  const buttonClass = classNames("button", {
    "correct-path": path,
  });

  // webSocket.on('puzzle to choices', (message) => {
  //   transition(message);
  // });

  // webSocket.on('show', (message) => {
  //   setShow(message);
  // });

  return (
    <div className='scene-layout'>
      {show ?
        <Timer
          sceneTransition={props.sceneTransition}
          scene={'deathwarehouse'}
          addHeart={props.addHeart}
          removeHeart={props.removeHeart}

          // SOCKETS
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

      {mode === PUZZLE &&
        <div style={styleShow} className='show-animation'>
          {<KeywordDisplay
            setPath={setPath}
            keyword={'untie'}
            style={styleShow}
            puzzleToChoices={transition}

            // SOCKETS
            socketSetInput={props.socketSetInput}
            socketSceneTransition={props.socketSceneTransition}
            socketPuzzleToChoices={props.socketPuzzleToChoices}
            socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
            socketSetPath={props.socketSetPath}
            socketSetShow={props.socketSetShow}

            // PLAYERS
            playerId={props.playerId}
            playerArr={props.playerArr}>
          </KeywordDisplay>}
        </div>
      }

      <div style={styleShow} className='show-animation'>
        <div className='heart-right'>
            {mode === CHOICES &&
              <ButtonChoice scene={"fifth"} sceneTransition={props.sceneTransition} choice={"Next"}></ButtonChoice>
            }
        </div>
      </div>

    </div>
  )
}