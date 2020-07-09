import React, {useEffect, useState} from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';

const classNames = require('classnames');

export default function DockFourth(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "After waiting for the zombies to pass, you linger a little too long. You each suddenly feel a knife at your throat as someone grabs you from behind. “Nice and easy, then. And keep quiet. Don’t want the dead walkers to hear us. \n Your captors bring you to an abandoned dockside building, where they tie you up and sit you back to back near a pile of broken glass and debris. “We’ll just sit tight until Selena gets here. She’s a bit busy with something at the moment.";

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
      </div>
      <Description className='descripton-layout' setShow={setShow} text={sceneDescription} maxLen={55}></Description>
      {mode === CHOICES &&
        <>
          <ButtonChoice choice={'Next'} scene={'fourth2'} sceneTransition={props.sceneTransition}></ButtonChoice>
        </>
      }
    </div>
  )
}