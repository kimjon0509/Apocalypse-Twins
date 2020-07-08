import React, {useEffect, useState} from "react";

import DockFirst from './DockFirst';
import DockSecond from './DockSecond';
import DockThird from './DockThird';
import DockFourth1 from './DockFourth1';
import DockFourth2 from './DockFourth2'
import DockFifth from './DockFifth';
import DockSixth from './DockSixth';
import GameOver from '../GameOver/GameOverScreen'
import TitlePage from '../../Title-page/TitlePage'

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
  const FOURTH1 = 'fourth1';
  const FOURTH2 = 'fourth2';
  const FIFTH = 'fifth';
  const SIXTH = 'sixth';
  const SEVENTH = 'seventh';
  const EIGHTH = 'eighth';
  const NINTH = 'ninth';
  const TENTH = 'tenth';
  const DEAD = 'dead';
  const START = 'start';

  return (
    <div className='scene-layout'>
      {mode === START && <DockFirst heart={props.heart} sceneTransition={transition}></DockFirst>}

      {mode === SECOND && <DockSecond heart={props.heart} sceneTransition={transition}></DockSecond>}
      {mode === THIRD && <DockThird heart={props.heart} sceneTransition={transition}></DockThird>}
      {mode === DEAD && <GameOver text="You have died. Try another path next time." maxLen={60} ></GameOver>}

      {mode === FOURTH1 && <DockFourth1 sceneTransition={transition}></DockFourth1>}
      {mode === FOURTH2 && <DockFourth2 sceneTransition={transition}></DockFourth2>}

      {mode === FIFTH && <DockFifth sceneTransition={transition}></DockFifth>}
      {mode === SIXTH && <DockSixth sceneTransition={transition}></DockSixth>}
      {mode === START && <TitlePage sceneTransition={transition}></TitlePage>}

      {/* {props.mode === SIXTH && <DockFirst transition={props.transition}></DockFirst>}
      {props.mode === SEVENTH && <DockFirst transition={props.transition}></DockFirst>}
      {props.mode === EIGHTH && <DockFirst transition={props.transition}></DockFirst>}
      {props.mode === NINTH && <DockFirst transition={props.transition}></DockFirst>}
      {props.mode === TENTH && <DockFirst transition={props.transition}></DockFirst>} */}
    </div>
  )
}