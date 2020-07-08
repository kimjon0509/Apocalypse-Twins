import React, {useEffect, useState} from "react";

import SubwayFirst from './SubwayFirst'

export default function SubwayStart(props) {
  const START = 'Subway';
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
      {props.mode === START && <SubwayFirst transition={props.transition}></SubwayFirst>}
      {props.mode === SECOND && <SubwayFirst transition={props.transition}></SubwayFirst>}

      {props.mode === THIRD && <SubwayFirst transition={props.transition}></SubwayFirst>}
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