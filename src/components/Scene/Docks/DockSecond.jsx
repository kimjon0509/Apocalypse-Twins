import React, {useEffect, useState} from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';

const classNames = require('classnames');

export default function DockSecond(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "You quietly pick your way between the buildings, one behind the other, keeping to the shadows. Entering an alley, you hear a hoarse groan to your left -- a group of zombies shambles toward you, but they haven’t noticed you yet. You both duck back. The pavement in the alley gleams with what looks like shards of broken glass; a few empty bottles lie nearby. On the other side of the alley, an open door leads into a darkened warehouse. You sense danger, but from what course?";

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
          {<KeywordDisplay keyword={'crunch'} style={styleShow} puzzleToChoices={transition} ></KeywordDisplay>}
        </div>
      }
      {mode === CHOICES && 
        <>
        <ButtonChoice choice={'Sneak across the alley'} scene={'third'} sceneTransition={props.sceneTransition}></ButtonChoice>
        <ButtonChoice choice={'Wait for the zombies to pass'} scene={'fourth1'} sceneTransition={props.sceneTransition}></ButtonChoice>
        <ButtonChoice choice={'Throw bottle to distract'} scene={'second'} sceneTransition={props.sceneTransition}></ButtonChoice>
        </>
      }
    </div>
  )
}