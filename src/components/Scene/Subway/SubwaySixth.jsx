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
  const sceneDescription = "Lifting the man between you, you get him inside and pull yourselves in just as your psychic shroud fails. The bell chimes and the doors close a second before the zombies hurl themselves into the train. They slam against the windows, their rotting faces pressed against the glass. You rush to the driver’s compartment and hit the throttle. The zombies fall away as you pick up speed and continue into the tunnel.";

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
      <div style={styleShow} className='show-animation'>
        <div className='heart-right'>
          {<HealthBar
            style={styleShow}
            heart={props.heart}
          ></HealthBar>}
        </div>
      </div>
      <Description className='descripton-layout' setShow={setShow} text={sceneDescription} maxLen={55}></Description>
      <div style={styleShow} className='show-animation'>
        <div className='heart-right'>
        {mode === CHOICES && 
          <>
          <ButtonChoice choice={"Next"} scene={'eighth'} sceneTransition={props.sceneTransition}></ButtonChoice>
          </>
        }
        </div>
      </div>
    </div>
  )
}