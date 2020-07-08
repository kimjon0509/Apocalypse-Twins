import React, {useEffect, useState} from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';

const classNames = require('classnames');

export default function SubwayFirst(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "You make your way down the grimey steps into the darkness of the subway station. Everything is quiet—the trains stopped operating not long after this all started. Looking down the tunnel to the right, you see a train parked on the tracks. Maybe it still works. To your left, the direction of the hospital, the tunnel continues into darkness. On foot would be quieter, but who knows what might be down there, and Vince is running out of time. You join minds, trying to sense which way holds danger...";

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
  // Show correct path when user gets the answer correct
  const [path, setPath] = useState(false)
  const buttonClass = classNames("button", {
    "correct-path": path,
  });

  const PUZZLE = 'Puzzle'
  const CHOICES = 'Choices'
  const styleShow = show ? {} : {visibility: 'hidden'}
  const { mode, transition } = usePuzzleToChoices('Puzzle')
  return (
    <div className='scene-layout'>
      {show ? <Timer puzzleToChoices={transition}></Timer> : <div className='timer-dummy'></div>}
      <div style={styleShow} className='show-animation'>
        <div className='heart-right'>
          {<HealthBar
            style={styleShow}
            heart={props.heart}
          ></HealthBar>}
        </div>
      </div>
      <Description className='descripton-layout' setShow={setShow} text={testDesc} maxLen={55}></Description>
      {mode === PUZZLE &&
        <div style={styleShow} className='show-animation'>
          {<KeywordDisplay
            keyword={'noise'}
            style={styleShow}
            puzzleToChoices={transition}
            sceneTransition={props.sceneTransition}
            
            setPath={setPath}

            ></KeywordDisplay>}
        </div>
      }
      {mode === CHOICES && 
        <>
          <ButtonChoice
          correctPath={buttonClass}
          choice={'Walk'}
          scene={'third'}
          sceneTransition={props.sceneTransition}
          ></ButtonChoice>
          <ButtonChoice choice={'Train'} scene={'second'} sceneTransition={props.sceneTransition}></ButtonChoice>
        </>
      }
    </div>
  )
}