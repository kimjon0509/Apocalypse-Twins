import React, {useEffect, useState} from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';

const classNames = require('classnames');

export default function SubwayEighth(props) {
  const sceneDescription = "After hours of walking, you finally reach the station. You see a wide set of stairs leading up and out. A little further ahead in the tunnel, a dim red light glows above a maintenance door. Which is the safest path?";

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
  const [show, setShow] = useState(false)
  const PUZZLE = 'Puzzle'
  const CHOICES = 'Choices'
  const styleShow = show ? {} : {visibility: 'hidden'}
  const { mode, transition } = usePuzzleToChoices('Puzzle')

  const [path, setPath] = useState(false)
  const buttonClass = classNames("button", {
    "correct-path": path,
  });

  return (
    <div className='scene-layout'>
      {show ? <Timer puzzleToChoices={transition}></Timer> : <div className='timer-dummy'></div>}
      <div style={styleShow} className='show-animation'>
        <div className='heart-right'>
          {<HealthBar style={styleShow} heart={props.heart}></HealthBar>}
        </div>
      </div>
      <Description className='descripton-layout' setShow={setShow} text={sceneDescription} maxLen={55}></Description>
      {mode === PUZZLE &&
        <div style={styleShow} className='show-animation'>
          {<KeywordDisplay
          setPath={setPath}
          keyword={'exit'}
          style={styleShow} 
          puzzleToChoices={transition} 
          ></KeywordDisplay>}
        </div>
      }
      {mode === CHOICES && 
        <>
          <ButtonChoice
          correctPath={buttonClass}
          choice={"Stairs"}
          scene={'ninth'}
          sceneTransition={props.sceneTransition}
          ></ButtonChoice>
          
          <ButtonChoice choice={'Door'} scene={'tenth'} sceneTransition={props.sceneTransition}></ButtonChoice>
        </>
      }
    </div>
  )
}