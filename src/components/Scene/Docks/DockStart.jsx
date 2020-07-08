import React, {useEffect, useState} from "react";

import DockFirst from './DockFirst';
import DockSecond from './DockSecond';
import DockThird from './DockThird';
import DockFourth from './DockFourth';
import DockFifth from './DockFifth';
import GameOver from '../GameOver/GameOverScreen'

export default function DockStart(props) {

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
      {mode === START && <DockFirst sceneTransition={transition}></DockFirst>}

      {mode === SECOND && <DockSecond sceneTransition={transition}></DockSecond>}
      {mode === THIRD && <DockThird sceneTransition={transition}></DockThird>}
      {mode === DEAD && <GameOver text="You have died. Try another path next time." maxLen={60} ></GameOver>}

      {mode === FOURTH && <DockFourth sceneTransition={transition}></DockFourth>}
      {mode === FIFTH && <DockFifth sceneTransition={transition}></DockFifth>}
      {/* {props.mode === SIXTH && <DockFirst transition={props.transition}></DockFirst>}
      {props.mode === SEVENTH && <DockFirst transition={props.transition}></DockFirst>}
      {props.mode === EIGHTH && <DockFirst transition={props.transition}></DockFirst>}
      {props.mode === NINTH && <DockFirst transition={props.transition}></DockFirst>}
      {props.mode === TENTH && <DockFirst transition={props.transition}></DockFirst>} */}
    </div>
  )
}