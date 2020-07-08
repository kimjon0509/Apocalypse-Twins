import React, {useEffect, useState} from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';

const classNames = require('classnames');

export default function SubwaySeventh(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "You make for the stairs as quickly and quietly as you can. You see, almost too late, a scattering of zombies standing unmoving around you on the stairs. With no other choice, you pick your way between them, hardly daring to breathe. As you reach the top, you realize the doors are barred from the outside. You’re going to have to use your telekinetic abilities to silently remove the bars from the outside before the zombies realize you’re there…";

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
      {show ? <Timer puzzleToChoices={transition} scene={'eleventh'} removeHeart ={props.removeHeart} sceneTransition={props.sceneTransition}></Timer> : <div className='timer-dummy'></div>}
      <div style={styleShow} className='show-animation'>
        <div className='heart-right'>
          {<HealthBar style={styleShow} heart={props.heart}></HealthBar>}
        </div>
      </div>
      <Description className='descripton-layout' setShow={setShow} text={sceneDescription} maxLen={55}></Description>
      {mode === PUZZLE &&
        <div style={styleShow} className='show-animation'>
          {<KeywordDisplay keyword={'unlock'}
          style={styleShow} scene={'eleventh'}
          sceneTransition={props.sceneTransition}
          puzzleToChoices={transition} 
          removeHeart ={props.removeHeart} ></KeywordDisplay>}
        </div>
      }
    </div>
  )
}