import React, {useEffect, useState} from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';

const classNames = require('classnames');

export default function DeadThree(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "Not wanting to risk the unknown, you increase your speed. Who would be down here, alive, anyway? As the train passes over the figure, you hear a brief scream and feel a sudden thud before all goes quiet again…";

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
          {<HealthBar style={styleShow} heart={props.heart}></HealthBar>}
        </div>
      </div>
      <Description className='descripton-layout' setShow={setShow} text={testDesc} maxLen={55}></Description>
      <div style={styleShow} className='show-animation'>
        <div className='heart-right'>
        {mode === CHOICES && 
          <>
          <ButtonChoice choice={"Next"} scene={'dead'} sceneTransition={props.sceneTransition}></ButtonChoice>
          </>
        }
        </div>
      </div>
    </div>
  )
}
