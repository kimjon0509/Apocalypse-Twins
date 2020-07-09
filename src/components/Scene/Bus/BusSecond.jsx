import React, {useEffect, useState} from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';

const classNames = require('classnames');

export default function BusSecond(props) {
  const [show, setShow] = useState(false)
  const sceneDescription1 = "As you are trying to hotwire the bus, you hear sudden screeching, coming in your direction. You just need a few more seconds. Glancing through the windshield, you see zombies rushing towards you at frightening speed. You lunge for the door lever and pull. The zombies run headfirst into the glass, howling and slamming themselves against it. At last the wires catch and the bus growls to life. You slam the pedal to the floor, plowing through the zombies, crushing their rotting forms with the hulk of the bus. The engine thunders as you swerve onto the street, the trailing zombies falling quickly behind...";
  const sceneDescription2 = "After the adrenaline fades and you’ve been driving for a while, you spot a gas station ahead. The hospital isn’t near your apartment and you need directions. You find a torn up map on a board outside the convenience store and write down directions. Before leaving, you both eye the darkened interior of the convenience store. Having brought flashlights, you contemplate going in. The sound of the idling bus reverberates around the lot. Your minds tingle in warning, but it’s unclear from which course..."
  const testDesc = "Hello, I hotwired the bus, and now im at the gas station"

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
      <Description className='descripton-layout' setShow={setShow} text={testDesc} maxLen={55}></Description>
      {mode === PUZZLE &&
        <div style={styleShow} className='show-animation'>
          {<KeywordDisplay keyword={'gas'} style={styleShow} puzzleToChoices={transition} sceneTransition={props.sceneTransition} ></KeywordDisplay>}
        </div>
      }
      {mode === CHOICES && 
        <>
        <ButtonChoice choice={'Check Convienence Store'} scene={'fourth'} sceneTransition={props.sceneTransition}></ButtonChoice>
        <ButtonChoice choice={'Go back to bus'} scene={'fifth'} sceneTransition={props.sceneTransition}></ButtonChoice>
        </>
      }
    </div>
  )
}