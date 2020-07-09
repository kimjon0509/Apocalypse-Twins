import React, { useEffect, useState } from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';

const classNames = require('classnames');

export default function BusFirst(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "Denise is worried. “Twins, maybe you should do your… thing. Try to sense if Vince is ok or if we should stay put.";

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

    return { mode: history[0], transition };
  }

  const PUZZLE = 'Puzzle'
  const CHOICES = 'Choices'
  const styleShow = show ? {} : { visibility: 'hidden' }
  const { mode, transition } = usePuzzleToChoices('Puzzle')
  return (
    <div className='scene-layout'>
      <Description className='descripton-layout' setShow={setShow} text={sceneDescription} maxLen={55}></Description>
      {mode === PUZZLE &&
        <div style={styleShow} className='show-animation'>
          {<KeywordDisplay
            keyword={'wound'}
            style={styleShow}
            sceneTransition={transition}
            puzzleToChoices={transition} 
            ></KeywordDisplay>}
        </div>
      }
      
      <div style={styleShow} className='show-animation'>
        <div className='heart-right'>
            {mode === CHOICES &&
              <ButtonChoice scene={"introThird"} sceneTransition={props.sceneTransition} choice={"Next"}></ButtonChoice>
            }
        </div>
      </div>

    </div>
  )
}