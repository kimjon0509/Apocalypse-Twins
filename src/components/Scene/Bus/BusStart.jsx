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
import GameOver from '../GameOver/GameOverScreen'
import {webSocket} from '../../../webSocket'

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
  const DEAD = 'dead'
  webSocket.on('scene', (message) => {
    transition(message)
  })
  return (
    <div className='scene-layout'>
      {mode === START && 
      <BusFirst 
      heart={props.heart} 
      sceneTransition={transition}
      //sockets
      socketSetInput={props.socketSetInput}
      socketSceneTransition={props.socketSceneTransition}
      socketPuzzleToChoices={props.socketPuzzleToChoices}
      socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
      socketSetPath={props.socketSetPath}
      socketSetShow={props.socketSetShow}

      playerId={props.playerId}
      playerArr={props.playerArr}>

      </BusFirst>}
      {mode === SECOND && 
      <BusSecond 
      heart={props.heart} 
      sceneTransition={transition}
      //sockets
      socketSetInput={props.socketSetInput}
      socketSceneTransition={props.socketSceneTransition}
      socketPuzzleToChoices={props.socketPuzzleToChoices}
      socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
      socketSetPath={props.socketSetPath}
      socketSetShow={props.socketSetShow}

      playerId={props.playerId}
      playerArr={props.playerArr}>
      </BusSecond>}
      {mode === THIRD && 
      <BusThird 
      heart={props.heart} 
      sceneTransition={transition}
      socketSetInput={props.socketSetInput}
      socketSceneTransition={props.socketSceneTransition}
      socketPuzzleToChoices={props.socketPuzzleToChoices}
      socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
      socketSetPath={props.socketSetPath}
      socketSetShow={props.socketSetShow}

      playerId={props.playerId}
      playerArr={props.playerArr}>
      </BusThird>} 
      {mode === FOURTH && 
      <BusFourth 
      heart={props.heart} 
      sceneTransition={transition}
      socketSceneTransition={props.socketSceneTransition}>
      </BusFourth>}
      {mode === FIFTH && 
      <BusFifth heart={props.heart} 
      sceneTransition={transition}
      socketSetInput={props.socketSetInput}
      socketSceneTransition={props.socketSceneTransition}
      socketPuzzleToChoices={props.socketPuzzleToChoices}
      socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
      socketSetPath={props.socketSetPath}
      socketSetShow={props.socketSetShow}

      playerId={props.playerId}
      playerArr={props.playerArr}>
      </BusFifth>}
      {mode === SIXTH && 
      <BusSixth 
      heart={props.heart} 
      addHeart={props.addHeart} 
      sceneTransition={transition}>
      socketSceneTransition={props.socketSceneTransition}
      </BusSixth>}
      {mode === SEVENTH && 
      <BusSeventh 
      heart={props.heart} 
      sceneTransition={transition}
      socketSetInput={props.socketSetInput}
      socketSceneTransition={props.socketSceneTransition}
      socketPuzzleToChoices={props.socketPuzzleToChoices}
      socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
      socketSetPath={props.socketSetPath}
      socketSetShow={props.socketSetShow}

      playerId={props.playerId}
      playerArr={props.playerArr}>
      </BusSeventh>}
      {mode === EIGHTH && 
      <BusEighth 
      heart={props.heart} 
      sceneTransition={transition}>
      socketSceneTransition={props.socketSceneTransition}
      </BusEighth>}
      {mode === NINTH && 
      <BusNinth 
      heart={props.heart} 
      sceneTransition={transition}
      socketSetInput={props.socketSetInput}
      socketSceneTransition={props.socketSceneTransition}
      socketPuzzleToChoices={props.socketPuzzleToChoices}
      socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
      socketSetPath={props.socketSetPath}
      socketSetShow={props.socketSetShow}

      playerId={props.playerId}
      playerArr={props.playerArr}>
      </BusNinth>}
      {mode === TENTH && 
      <BusTenth 
      heart={props.heart} 
      sceneTransition={transition}>
      </BusTenth>}
      {mode === ELEVENTH && <BusEleventh heart={props.heart} removeHeart={props.removeHeart} sceneTransition={transition}></BusEleventh>}
      {mode === TWELFTH && <BusTwelfth heart={props.heart} sceneTransition={transition}></BusTwelfth>}
      {mode === THIRTEENTH && <BusThirteenth heart={props.heart} sceneTransition={transition}></BusThirteenth>}
      {mode === FOURTEENTH && <BusFourteenth heart={props.heart} sceneTransition={transition}></BusFourteenth>}
      {mode === DEAD && <GameOver text="You have died, try another path"></GameOver>}
    </div>
  )
}