import React, {useEffect, useState} from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';

const classNames = require('classnames');

export default function DeadOne(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "You hold out as long as you can, but lifting the man and trying to shroud your presence at the same time is too much. The pack catches your scent and they’re on you before you can get inside the train and close the doors. You try to haul yourself in, but it’s no good. The zombies pull you back and enjoy a fine meal of three warm bodies...";

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
    return {mode: history[0], transition};
  }
  const PUZZLE = 'Puzzle'
  const CHOICES = 'Choices'
  const styleShow = show ? {} : {visibility: 'hidden'}
  const { mode, transition } = usePuzzleToChoices('Choices')

  return (
    <div className='scene-layout'>
      <div style={styleShow} className='show-animation'>
        <div className='heart-right'>
          {<HealthBar style={styleShow} heart={props.heart}></HealthBar>}
        </div>
      </div>
      <Description className='descripton-layout' setShow={setShow} text={sceneDescription} maxLen={55}></Description>
      {mode === CHOICES && 
        <>
        <ButtonChoice choice={"Next"} scene={'dead'} sceneTransition={props.sceneTransition}></ButtonChoice>
        </>
      }
    </div>
  )
}