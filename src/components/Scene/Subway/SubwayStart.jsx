import React, {useEffect, useState} from "react";

import SubwayFirst from './SubwayFirst';
import SubwaySecond from './SubwaySecond';
import SubwayThird from './SubwayThird';
import SubwayFourth from './SubwayFourth';
import SubwayFifth from './SubwayFifth';
import SubwaySixth from './SubwaySixth';
import SubwaySeventh from './SubwaySeventh';
import SubwayEighth from './SubwayEighth';
import SubwayNinth from './SubwayNinth';
import SubwayTenth from './SubwayTenth';
import SubwayEleventh from './SubwayEleventh';
import SubwayTwelfth from './SubwayTwelfth';

import {webSocket} from '../../../webSocket';

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

  webSocket.on('scene', (message) => {
    transition(message)
  })

  return (
    <div className='scene-layout'>
      {mode === START && 
      <SubwayFirst 
        heart={props.heart}
        sceneTransition={transition} 

        //sockets
        socketSetInput={props.socketSetInput}
        // timerRunOut={props.timerRunOut}
        socketSceneTransition={props.socketSceneTransition}
        socketPuzzleToChoices={props.socketPuzzleToChoices}
        socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
        socketSetPath={props.socketSetPath}
        socketSetShow={props.socketSetShow}

        playerId={props.playerId}
        playerArr={props.playerArr}

        ></SubwayFirst>}
      {mode === SECOND && 
        <SubwaySecond
          heart={props.heart}
          sceneTransition={transition}

          socketSetInput={props.socketSetInput}
          // timerRunOut={props.timerRunOut}
          socketSceneTransition={props.socketSceneTransition}
          socketPuzzleToChoices={props.socketPuzzleToChoices}
          socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
          socketSetPath={props.socketSetPath}
          socketSetShow={props.socketSetShow}
        
        ></SubwaySecond>}
      {mode === THIRD && 
        <SubwayThird heart={props.heart}
        sceneTransition={transition}

        socketSetInput={props.socketSetInput}
        // timerRunOut={props.timerRunOut}
        socketSceneTransition={props.socketSceneTransition}
        socketPuzzleToChoices={props.socketPuzzleToChoices}
        socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
        socketSetPath={props.socketSetPath}
        socketSetShow={props.socketSetShow}
        ></SubwayThird>}
      {mode === FOURTH && 
        <SubwayFourth 
        heart={props.heart} 
        sceneTransition={transition}

        socketSetInput={props.socketSetInput}
        // timerRunOut={props.timerRunOut}
        socketSceneTransition={props.socketSceneTransition}
        socketPuzzleToChoices={props.socketPuzzleToChoices}
        socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
        socketSetPath={props.socketSetPath}
        socketSetShow={props.socketSetShow}
        ></SubwayFourth>}
      {mode === FIFTH && 
        <SubwayFifth 
        heart={props.heart}
        sceneTransition={transition}

        socketSetInput={props.socketSetInput}
        // timerRunOut={props.timerRunOut}
        socketSceneTransition={props.socketSceneTransition}
        socketPuzzleToChoices={props.socketPuzzleToChoices}
        socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
        socketSetPath={props.socketSetPath}
        socketSetShow={props.socketSetShow}
        ></SubwayFifth>}
      {mode === SIXTH && 
      <SubwaySixth 
        heart={props.heart} 
        sceneTransition={transition}

        socketSetInput={props.socketSetInput}
        // timerRunOut={props.timerRunOut}
        socketSceneTransition={props.socketSceneTransition}
        socketPuzzleToChoices={props.socketPuzzleToChoices}
        socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
        socketSetPath={props.socketSetPath}
        socketSetShow={props.socketSetShow}
        ></SubwaySixth>}
      {mode === SEVENTH && 
        <SubwaySeventh 
        heart={props.heart}
        sceneTransition={transition}

        socketSetInput={props.socketSetInput}
        // timerRunOut={props.timerRunOut}
        socketSceneTransition={props.socketSceneTransition}
        socketPuzzleToChoices={props.socketPuzzleToChoices}
        socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
        socketSetPath={props.socketSetPath}
        socketSetShow={props.socketSetShow}
        ></SubwaySeventh>}
      {mode === EIGHTH && 
        <SubwayEighth 
        heart={props.heart}
        sceneTransition={transition}

        socketSetInput={props.socketSetInput}
        // timerRunOut={props.timerRunOut}
        socketSceneTransition={props.socketSceneTransition}
        socketPuzzleToChoices={props.socketPuzzleToChoices}
        socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
        socketSetPath={props.socketSetPath}
        socketSetShow={props.socketSetShow}
        ></SubwayEighth>}
      {mode === NINTH && 
        <SubwayNinth 
        heart={props.heart} 
        removeHeart ={props.removeHeart}
        sceneTransition={transition}

        socketSetInput={props.socketSetInput}
        // timerRunOut={props.timerRunOut}
        socketSceneTransition={props.socketSceneTransition}
        socketPuzzleToChoices={props.socketPuzzleToChoices}
        socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
        socketSetPath={props.socketSetPath}
        socketSetShow={props.socketSetShow}
        ></SubwayNinth>}
      {mode === TENTH && 
        <SubwayTenth 
        heart={props.heart} 
        sceneTransition={transition}
        
        socketSetInput={props.socketSetInput}
        // timerRunOut={props.timerRunOut}
        socketSceneTransition={props.socketSceneTransition}
        socketPuzzleToChoices={props.socketPuzzleToChoices}
        socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
        socketSetPath={props.socketSetPath}
        socketSetShow={props.socketSetShow}
        ></SubwayTenth>}
      {mode === ELEVENTH && 
        <SubwayEleventh 
          heart={props.heart} 
          sceneTransition={transition}
        
          socketSetInput={props.socketSetInput}
          // timerRunOut={props.timerRunOut}
          socketSceneTransition={props.socketSceneTransition}
          socketPuzzleToChoices={props.socketPuzzleToChoices}
          socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
          socketSetPath={props.socketSetPath}
          socketSetShow={props.socketSetShow}
        ></SubwayEleventh>}
      {mode === TWELFTH && 
        <SubwayTwelfth 
          heart={props.heart} 
          sceneTransition={transition}

          socketSetInput={props.socketSetInput}
          // timerRunOut={props.timerRunOut}
          socketSceneTransition={props.socketSceneTransition}
          socketPuzzleToChoices={props.socketPuzzleToChoices}
          socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
          socketSetPath={props.socketSetPath}
          socketSetShow={props.socketSetShow}
        ></SubwayTwelfth>}

      {mode === DEATHONE && <DeathOne heart={props.heart} sceneTransition={transition}></DeathOne>}
      {mode === DEATHTWO && <DeathTwo heart={props.heart} sceneTransition={transition}></DeathTwo>}
      {/* {mode === DEATHTHREE&& <DeathThree heart={props.heart} sceneTransition={transition}></DeathThree>} */}



      {mode === DEAD && <GameOver text="You have died. Try another path next time." maxLen={60} ></GameOver>}

    </div>
  )
}