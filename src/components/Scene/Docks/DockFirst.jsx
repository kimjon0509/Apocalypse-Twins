import React, {useEffect, useState} from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';

const classNames = require('classnames');

export default function DockFirst(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "As you approach the docks, you hear the sound of voices drifting on the air. Peering around the corner of a boarded-up fish and chip shack, you see a group of boaters arguing over something. They appear to be armed. You attempt to sense their intentions before acting...";

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
  return (
    <div className='scene-layout'>
      {show ? <Timer puzzleToChoices={transition}></Timer> : <div className='timer-dummy'></div>}
      <div style={styleShow} className='show-animation'>
        <div className='heart-right'>
          {<HealthBar heart={props.heart} style={styleShow} ></HealthBar>}
        </div>
      </div>
      <Description className='descripton-layout' setShow={setShow} text={sceneDescription} maxLen={55}></Description>
      {mode === PUZZLE &&
        <div style={styleShow} className='show-animation'>
          {<KeywordDisplay keyword={'worry'} style={styleShow} puzzleToChoices={transition} ></KeywordDisplay>}
        </div>
      }
      {mode === CHOICES && 
        <>
        <ButtonChoice choice={'Sneak past the boaters'} scene={'second'} sceneTransition={props.sceneTransition}></ButtonChoice>
        <ButtonChoice choice={'Approach and try to talk with them'} scene={'seventh'} sceneTransition={props.sceneTransition}></ButtonChoice>
        </>
      }
    </div>
  )
}