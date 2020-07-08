import React, {useEffect, useState} from "react";

import SubwayFirst from './SubwayFirst';
import SubwaySecond from './SubwaySecond';
import SubwayThird from './SubwayThird';
import SubwayFourth from './SubwayFourth';
import SubwayFifth from './SubwayFifth';
import GameOver from '../GameOver/GameOverScreen'

export default function SubwayStart(props) {

  function useScene(initial) {
    const [scene, setScene] = useState([initial]);
  
    function transition(changeMode, replace = false) {
      setScene(prev => {
        if (replace) {
          return [changeMode, ...prev.slice(1)];
        } else {
          return [changeMode, ...prev];
        }
      });
    }
  
    return {mode: scene[0], transition };
  }

  const {mode, transition} = useScene('first')

  const START = 'first';
  const SECOND = 'second';
  const THIRD = 'third';
  const FOURTH = 'fourth';
  const FIFTH = 'fifth';
  const SIXTH = 'sixth';
  const SEVENTH = 'seventh';
  const EIGHTH = 'eighth';
  const NINTH = 'ninth';
  const TENTH = 'tenth';
  const DEAD = 'dead';

  return (
    <div className='scene-layout'>
      {mode === START && <SubwayFirst sceneTransition={transition}></SubwayFirst>}

      {mode === SECOND && <SubwaySecond sceneTransition={transition}></SubwaySecond>}
      {mode === THIRD && <SubwayThird sceneTransition={transition}></SubwayThird>}
      {mode === DEAD && <GameOver text="You have died. Try another path next time." maxLen={60} ></GameOver>}

      {mode === FOURTH && <SubwayFourth sceneTransition={transition}></SubwayFourth>}
      {mode === FIFTH && <SubwayFifth sceneTransition={transition}></SubwayFifth>}
      {/* {props.mode === SIXTH && <SubwayFirst transition={props.transition}></SubwayFirst>}
      {props.mode === SEVENTH && <SubwayFirst transition={props.transition}></SubwayFirst>}
      {props.mode === EIGHTH && <SubwayFirst transition={props.transition}></SubwayFirst>}
      {props.mode === NINTH && <SubwayFirst transition={props.transition}></SubwayFirst>}
      {props.mode === TENTH && <SubwayFirst transition={props.transition}></SubwayFirst>} */}
    </div>
  )
}