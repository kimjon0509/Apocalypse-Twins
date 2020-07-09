import React, {useEffect, useState} from "react";

import SubwayFirst from './SubwayFirst';
import SubwaySecond from './SubwaySecond';
import SubwayThird from './SubwayThird';
import SubwayFourth from './SubwayFourth';
import SubwayFifth from './SubwayFifth';
import SubwaySixth from './SubwaySixth';
import SubwaySeventh from './SubwaySeventh';
import SubwayEighth from './SubwayEighth';
import SubwayNinth from './SubwayNinth'
import SubwayTenth from './SubwayTenth'
import SubwayEleventh from './SubwayEleventh'
import SubwayTwelfth from './SubwayTwelfth'

import DeathOne from './DeathOne';
import DeathTwo from './DeathTwo';
// import DeathThree from './DeathThree';

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
  const ELEVENTH = 'eleventh';
  const TWELFTH = 'twelfth';
  const DEAD = 'dead';
  const DEATHONE ='deathOne';
  const DEATHTWO ='deathTwo';
  
  // const DEATHTHREE ='deathThree';

  return (
    <div className='scene-layout'>
      {mode === START && <SubwayFirst heart={props.heart} sceneTransition={transition} ></SubwayFirst>}
      {mode === SECOND && <SubwaySecond heart={props.heart} sceneTransition={transition}></SubwaySecond>}
      {mode === THIRD && <SubwayThird heart={props.heart} sceneTransition={transition}></SubwayThird>}
      {mode === FOURTH && <SubwayFourth heart={props.heart} sceneTransition={transition}></SubwayFourth>}
      {mode === FIFTH && <SubwayFifth heart={props.heart} sceneTransition={transition}></SubwayFifth>}
      {mode === SIXTH && <SubwaySixth heart={props.heart} sceneTransition={transition}></SubwaySixth>}
      {mode === SEVENTH && <SubwaySeventh heart={props.heart} sceneTransition={transition}></SubwaySeventh>}
      {mode === EIGHTH && <SubwayEighth heart={props.heart} sceneTransition={transition}></SubwayEighth>}
      {mode === NINTH && <SubwayNinth heart={props.heart} 
      removeHeart ={props.removeHeart}
      sceneTransition={transition}
      ></SubwayNinth>}
      {mode === TENTH && <SubwayTenth heart={props.heart} sceneTransition={transition}></SubwayTenth>}
      {mode === ELEVENTH && <SubwayEleventh heart={props.heart} sceneTransition={transition}></SubwayEleventh>}
      {mode === TWELFTH && <SubwayTwelfth heart={props.heart} sceneTransition={transition}></SubwayTwelfth>}

      {mode === DEATHONE && <DeathOne heart={props.heart} sceneTransition={transition}></DeathOne>}
      {mode === DEATHTWO && <DeathTwo heart={props.heart} sceneTransition={transition}></DeathTwo>}
      {/* {mode === DEATHTHREE&& <DeathThree heart={props.heart} sceneTransition={transition}></DeathThree>} */}



      {mode === DEAD && <GameOver text="You have died. Try another path next time." maxLen={60} ></GameOver>}

    </div>
  )
}