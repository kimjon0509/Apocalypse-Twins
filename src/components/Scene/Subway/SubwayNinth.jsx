import React, {useEffect, useState} from "react";
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';

import {webSocket} from '../../../webSocket';

export default function SubwaySeventh(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "You make for the stairs as quickly and quietly as you can. You see, almost too late, a scattering of zombies standing unmoving around you on the stairs. With no other choice, you pick your way between them, hardly daring to breathe. As you reach the top, you realize the doors are barred from the outside. You’re going to have to use your telekinetic abilities to silently remove the bars from the outside before the zombies realize you’re there…";

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
  const styleShow = show ? {} : {visibility: 'hidden'}
  const { mode, transition } = usePuzzleToChoices('Puzzle')

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
      {show ? 
        <Timer 
          scene={'eleventh'} 
          removeHeart ={props.removeHeart} 

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
          keyword={'unlock'}
          style={styleShow} 
          scene={'eleventh'}
          removeHeart ={props.removeHeart} 

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
    </div>
  )
}