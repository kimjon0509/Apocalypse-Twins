import React, { useEffect, useState } from "react";
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';

import { webSocket } from '../../../webSocket';

const classNames = require('classnames');

export default function BusFirst(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "Denise is worried. “Twins, maybe you should do your… thing. Try to sense if Vince is ok or if we should stay put.";

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

  const PUZZLE = 'Puzzle'
  const CHOICES = 'Choices'
  const styleShow = show ? {} : { visibility: 'hidden' }
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
    webSocket.off('show');
  }
}, [])

  
  return (
    <div className='scene-layout'>
      <Description
        className='descripton-layout'
        setShow={setShow}
        text={sceneDescription} 
        maxLen={55}

        socketPuzzleToChoices={props.socketPuzzleToChoices}
        socketSetShow={props.socketSetShow}
      ></Description>

      {mode === PUZZLE &&
        <div style={styleShow} className='show-animation'>
          {<KeywordDisplay
            keyword={'wound'}
            style={styleShow}
            puzzleToChoices={transition} 

            socketSetInput={props.socketSetInput}
            socketPuzzleToChoices={props.socketPuzzleToChoices}
            socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}

            playerId={props.playerId}
            playerArr={props.playerArr}
            
            ></KeywordDisplay>}
        </div>
      }
      
      <div style={styleShow} className='show-animation'>
        <div className='heart-right'>
            {mode === CHOICES &&
              <ButtonChoice 
              scene={"introThird"} 
              sceneTransition={props.sceneTransition}
              choice={"Next"}

              socketSceneTransition={props.socketSceneTransition}
              ></ButtonChoice>
            }
        </div>
      </div>

    </div>
  )
}