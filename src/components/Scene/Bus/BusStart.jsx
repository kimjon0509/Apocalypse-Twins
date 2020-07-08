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
      {mode === START && <BusFirst transition={transition}></BusFirst>}

      {mode === SECOND && <BusSecond transition={transition}></BusSecond>}
      {mode === THIRD && <BusThird transition={transition}></BusThird>} 

      {mode === FOURTH && <BusFourth transition={transition}></BusFourth>}
      {mode === FIFTH && <BusFifth transition={transition}></BusFifth>}
      {mode === SIXTH && <BusSixth transition={transition}></BusSixth>}
      {mode === SEVENTH && <BusSeventh transition={transition}></BusSeventh>}
      {mode === EIGHTH && <BusEighth transition={transition}></BusEighth>}
      {mode === NINTH && <BusNinth transition={transition}></BusNinth>}
      {mode === TENTH && <BusTenth transition={transition}></BusTenth>}
      {mode === ELEVENTH && <BusEleventh transition={transition}></BusEleventh>}
      {mode === TWELFTH && <BusTwelfth transition={transition}></BusTwelfth>}
      {mode === THIRTEENTH && <BusThirteenth transition={props.transition}></BusThirteenth>}
      {mode === FOURTEENTH && <BusFourteenth transition={props.transition}></BusFourteenth>}
    </div>
  )
}