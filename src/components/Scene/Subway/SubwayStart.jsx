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

  useEffect(() => {
    let mounted = true;
    if(mounted){
      webSocket.on('scene', (message) => {
        transition(message)
      })
    }
    return () => mounted = false;
  }, [])

  return (
    <div className='scene-layout'>
      {mode === START && 
      <SubwayFirst 
        heart={props.heart}
        socketSetInput={props.socketSetInput}
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
          socketSetInput={props.socketSetInput}
          socketSceneTransition={props.socketSceneTransition}
          socketPuzzleToChoices={props.socketPuzzleToChoices}
          socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
          socketSetPath={props.socketSetPath}
          socketSetShow={props.socketSetShow}
          playerId={props.playerId}
          playerArr={props.playerArr} 
        ></SubwaySecond>}

      {mode === THIRD && 
        <SubwayThird heart={props.heart}
        socketSetInput={props.socketSetInput}
        socketSceneTransition={props.socketSceneTransition}
        socketPuzzleToChoices={props.socketPuzzleToChoices}
        socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
        socketSetPath={props.socketSetPath}
        socketSetShow={props.socketSetShow}
        playerId={props.playerId}
        playerArr={props.playerArr}
        ></SubwayThird>}

      {mode === FOURTH && 
        <SubwayFourth 
        heart={props.heart} 
        socketSetInput={props.socketSetInput}
        socketSceneTransition={props.socketSceneTransition}
        socketPuzzleToChoices={props.socketPuzzleToChoices}
        socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
        socketSetPath={props.socketSetPath}
        socketSetShow={props.socketSetShow}
        playerId={props.playerId}
        playerArr={props.playerArr}
        ></SubwayFourth>}

      {mode === FIFTH && 
        <SubwayFifth 
        heart={props.heart}
        socketSetInput={props.socketSetInput}
        socketSceneTransition={props.socketSceneTransition}
        socketPuzzleToChoices={props.socketPuzzleToChoices}
        socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
        socketSetPath={props.socketSetPath}
        socketSetShow={props.socketSetShow}
        playerId={props.playerId}
        playerArr={props.playerArr}
        ></SubwayFifth>}
      {mode === SIXTH && 
      <SubwaySixth 
        heart={props.heart} 
        socketSetInput={props.socketSetInput}
        socketSceneTransition={props.socketSceneTransition}
        socketPuzzleToChoices={props.socketPuzzleToChoices}
        socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
        socketSetPath={props.socketSetPath}
        socketSetShow={props.socketSetShow}
        playerId={props.playerId}
        playerArr={props.playerArr}
        ></SubwaySixth>}

      {mode === SEVENTH && 
        <SubwaySeventh 
        heart={props.heart}
        socketSetInput={props.socketSetInput}
        socketSceneTransition={props.socketSceneTransition}
        socketPuzzleToChoices={props.socketPuzzleToChoices}
        socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
        socketSetPath={props.socketSetPath}
        socketSetShow={props.socketSetShow}
        playerId={props.playerId}
        playerArr={props.playerArr}
        ></SubwaySeventh>}

      {mode === EIGHTH && 
        <SubwayEighth 
        heart={props.heart}
        socketSetInput={props.socketSetInput}
        socketSceneTransition={props.socketSceneTransition}
        socketPuzzleToChoices={props.socketPuzzleToChoices}
        socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
        socketSetPath={props.socketSetPath}
        socketSetShow={props.socketSetShow}
        playerId={props.playerId}
        playerArr={props.playerArr}
        ></SubwayEighth>}

      {mode === NINTH && 
        <SubwayNinth 
        heart={props.heart} 
        removeHeart ={props.removeHeart}
        socketSetInput={props.socketSetInput}
        socketSceneTransition={props.socketSceneTransition}
        socketPuzzleToChoices={props.socketPuzzleToChoices}
        socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
        socketSetPath={props.socketSetPath}
        socketSetShow={props.socketSetShow}
        playerId={props.playerId}
        playerArr={props.playerArr}
        ></SubwayNinth>}

      {mode === TENTH && 
        <SubwayTenth 
        heart={props.heart} 
        socketSetInput={props.socketSetInput}
        socketSceneTransition={props.socketSceneTransition}
        socketPuzzleToChoices={props.socketPuzzleToChoices}
        socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
        socketSetPath={props.socketSetPath}
        socketSetShow={props.socketSetShow}
        playerId={props.playerId}
        playerArr={props.playerArr}
        ></SubwayTenth>}

      {mode === ELEVENTH && 
        <SubwayEleventh 
          heart={props.heart} 
          socketSetInput={props.socketSetInput}
          socketSceneTransition={props.socketSceneTransition}
          socketPuzzleToChoices={props.socketPuzzleToChoices}
          socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
          socketSetPath={props.socketSetPath}
          socketSetShow={props.socketSetShow}
          playerId={props.playerId}
          playerArr={props.playerArr}
        ></SubwayEleventh>}

      {mode === TWELFTH && 
        <SubwayTwelfth 
          heart={props.heart} 
          socketSetInput={props.socketSetInput}
          socketSceneTransition={props.socketSceneTransition}
          socketPuzzleToChoices={props.socketPuzzleToChoices}
          socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
          socketSetPath={props.socketSetPath}
          socketSetShow={props.socketSetShow}
          playerId={props.playerId}
          playerArr={props.playerArr}
        ></SubwayTwelfth>}

      {mode === DEATHONE && 
        <DeathOne 
        heart={props.heart} 
        socketSceneTransition={props.socketSceneTransition}
        socketSetShow={props.socketSetShow}
        ></DeathOne>}

      {mode === DEATHTWO && 
        <DeathTwo 
          heart={props.heart} 
          socketSceneTransition={props.socketSceneTransition}
          socketSetShow={props.socketSetShow}
        ></DeathTwo>}
      {/* {mode === DEATHTHREE&& <DeathThree heart={props.heart} sceneTransition={transition}></DeathThree>} */}



      {mode === DEAD && 
        <GameOver 
          text="You have died. Try another path next time." 
          maxLen={60} 
        ></GameOver>}

    </div>
  )
}