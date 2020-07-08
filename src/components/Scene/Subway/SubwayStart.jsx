import React, {useEffect, useState} from "react";

import SubwayFirst from './SubwayFirst';
import SubwaySecond from './SubwaySecond';
import SubwayThird from './SubwayThird';

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
  const ELEVENTH = 'eleventh';
  const TWELFTH = 'twelfth';
  const thirtieth = 'thirtieth';

  return (
    <div className='scene-layout'>
      {mode === START && <SubwayFirst transition={transition}></SubwayFirst>}

      {mode === SECOND && <SubwaySecond transition={transition}></SubwaySecond>}
      {mode === THIRD && <SubwayThird transition={transition}></SubwayThird>}

      {props.mode === FOURTH && <SubwayFirst transition={props.transition}></SubwayFirst>}
      {props.mode === FIFTH && <SubwayFirst transition={props.transition}></SubwayFirst>}
      {props.mode === SIXTH && <SubwayFirst transition={props.transition}></SubwayFirst>}
      {props.mode === SEVENTH && <SubwayFirst transition={props.transition}></SubwayFirst>}
      {props.mode === NINTH && <SubwayFirst transition={props.transition}></SubwayFirst>}
      {props.mode === TENTH && <SubwayFirst transition={props.transition}></SubwayFirst>}
      {props.mode === ELEVENTH && <SubwayFirst transition={props.transition}></SubwayFirst>}
      {props.mode === TWELFTH && <SubwayFirst transition={props.transition}></SubwayFirst>}
      {props.mode === thirtieth && <SubwayFirst transition={props.transition}></SubwayFirst>}
    </div>
  )
}