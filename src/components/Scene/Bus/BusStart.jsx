import React, {useEffect, useState} from "react";

import BusFirst from './BusFirst';
import BusSecond from './BusSecond';
import BusThird from './BusThird';
import BusFourth from './BusFourth';
import BusFifth from './BusFifth';
import BusSixth from './BusSixth';
import BusSeventh from './BusSeventh';
import BusEighth from './BusEighth';
import BusNinth from './BusNinth';
import BusTenth from "./BusTenth";
import BusEleventh from "./BusEleventh";
import BusTwelfth from "./BusTwelfth";
import BusThirteenth from "./BusThirteen";
import BusFourteenth from "./BusFourteenth";

export default function BusStart(props) {

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
  const ELEVENTH = 'eleventh';
  const TWELFTH = 'twelfth';
  const THIRTEENTH = 'thirteenth';
  const FOURTEENTH = 'fourteenth';

  return (
    <div className='scene-layout'>
      {mode === START && <BusFirst sceneTransition={transition}></BusFirst>}
      {mode === SECOND && <BusSecond sceneTransition={transition}></BusSecond>}
      {mode === THIRD && <BusThird sceneTransition={transition}></BusThird>} 
      {mode === FOURTH && <BusFourth sceneTransition={transition}></BusFourth>}
      {mode === FIFTH && <BusFifth sceneTransition={transition}></BusFifth>}
      {mode === SIXTH && <BusSixth sceneTransition={transition}></BusSixth>}
      {mode === SEVENTH && <BusSeventh sceneTransition={transition}></BusSeventh>}
      {mode === EIGHTH && <BusEighth sceneTransition={transition}></BusEighth>}
      {mode === NINTH && <BusNinth sceneTransition={transition}></BusNinth>}
      {mode === TENTH && <BusTenth sceneTransition={transition}></BusTenth>}
      {mode === ELEVENTH && <BusEleventh sceneTransition={transition}></BusEleventh>}
      {mode === TWELFTH && <BusTwelfth sceneTransition={transition}></BusTwelfth>}
      {mode === THIRTEENTH && <BusThirteenth sceneTransition={transition}></BusThirteenth>}
      {mode === FOURTEENTH && <BusFourteenth sceneTransition={transition}></BusFourteenth>}
    </div>
  )
}