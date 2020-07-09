import React, {useEffect, useState} from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';

const classNames = require('classnames');

export default function DockThird(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "You make for the warehouse door, but as you cross the alley your boots crunch the broken glass. The zombies react immediately, rushing toward you, overwhelming your feeble attempts to resist, and devouring your warm, living flesh…";

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
  return (
    <div className='scene-layout'>
      {/* {show ? <Timer puzzleToChoices={transition}></Timer> : <div className='timer-dummy'></div>} */}
      <div style={styleShow} className='show-animation'>
        {/* <div className='heart-right'>
          {<HealthBar heart={props.heart} style={styleShow} ></HealthBar>}
        </div> */}
      </div>
      <Description className='descripton-layout' setShow={setShow} text={sceneDescription} maxLen={55}></Description>
      {/* {mode === PUZZLE &&
        <div style={styleShow} className='show-animation'>
          {<KeywordDisplay keyword={'crunch'} style={styleShow} puzzleToChoices={transition} ></KeywordDisplay>}
        </div>
      } */}
      {mode === CHOICES && 
        <>
        <ButtonChoice choice={'Next'} scene={'dead'} sceneTransition={props.sceneTransition}></ButtonChoice>
        </>
      }
    </div>
  )
}