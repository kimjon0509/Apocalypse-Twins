import React, {useEffect, useState} from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';

import {webSocket} from '../../../webSocket';

const classNames = require('classnames');

export default function SubwayFourth(props) {
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

  useEffect(() => {
    let mounted = true;
    if(mounted){
      webSocket.on('puzzle to choices', (message) => {
        transition(message);
      });
  
      webSocket.on('show', (message) => {
        setShow(message);
      });
    }

     return () => mounted = false;
  }, [])

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
      <Description
        className='descripton-layout'
        text={sceneDescription}
        maxLen={55}

        socketSetShow={props.socketSetShow}
      ></Description>
      <div style={styleShow} className='show-animation'>
        <div className='heart-right'>
        {mode === CHOICES && 
          <>
            <ButtonChoice
              choice={"Next"}
              scene={'seventh'}
              socketSceneTransition={props.socketSceneTransition}
            ></ButtonChoice>
          </>
        }
        </div>
      </div>
    </div>
  )
}
