import React, {useEffect, useState} from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';

const classNames = require('classnames');

export default function DockFifth(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "Working together, you manage to loosen your bonds and escape out the back. \n \n You see an actual, working boat moored to the dock ahead… with three armed boaters guarding it. They look tough, but you might have a chance if you take them by surprise. You also notice a group of fuel tanks a little further down the docks. Or maybe you could slip into the water and board the boat unnoticed… \n \n You try to gain some insight into the paths before you…";

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
          {<KeywordDisplay keyword={'attract'} style={styleShow} puzzleToChoices={transition} ></KeywordDisplay>}
        </div>
      }
      {mode === CHOICES && 
        <>
        <ButtonChoice choice={'Take the boaters by surprise'} scene={'sixth'} sceneTransition={props.sceneTransition}></ButtonChoice>
        <ButtonChoice choice={'Light the fuel tanks'} scene={'fourth1'} sceneTransition={props.sceneTransition}></ButtonChoice>
        <ButtonChoice choice={'Swim to the boat and try to board unnoticed'} scene={'second'} sceneTransition={props.sceneTransition}></ButtonChoice>
        </>
      }
    </div>
  )
}