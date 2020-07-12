import React, {useEffect, useState} from "react";

import DockFirst from './DockFirst';
import DockSecond from './DockSecond';
import DockThird from './DockThird';
import DockFourth1 from './DockFourth1';
import DockFourth2 from './DockFourth2'
import DockFifth from './DockFifth';
import DockSixth from './DockSixth';
import DockSeventh from './DockSeventh';
import DockNinth from './DockNinth';
import DockDeathWarehouse from './DockDeathWarehouse';
import GameOver from '../GameOver/GameOverScreen';

import {webSocket} from '../../../webSocket';

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
  const DEATHWAREHOUSE = 'deathwarehouse'
  const TITLE = 'start';

  webSocket.on('scene', (message) => {
    transition(message)
  })

  return (
    <div className='scene-layout'>
      {mode === START &&
        <DockFirst
          heart={props.heart}
          addHeart={props.addHeart}
          removeHeart={props.removeHeart}
          sceneTransition={transition}

          // SOCKETS
          socketSetInput={props.socketSetInput}
          socketSceneTransition={props.socketSceneTransition}
          socketPuzzleToChoices={props.socketPuzzleToChoices}
          socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
          socketSetPath={props.socketSetPath}
          socketSetShow={props.socketSetShow}

          // PLAYERS
          playerId={props.playerId}
          playerArr={props.playerArr}>
        </DockFirst>}

      {mode === SECOND && 
        <DockSecond 
          heart={props.heart}
          addHeart={props.addHeart}
          removeHeart={props.removeHeart} 
          sceneTransition={transition}
          
          // SOCKETS
          socketSetInput={props.socketSetInput}
          socketSceneTransition={props.socketSceneTransition}
          socketPuzzleToChoices={props.socketPuzzleToChoices}
          socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
          socketSetPath={props.socketSetPath}
          socketSetShow={props.socketSetShow}
          
          // PLAYERS
          playerId={props.playerId}
          playerArr={props.playerArr}>
        </DockSecond>}
      
      {mode === THIRD && 
        <DockThird 
          heart={props.heart}
          addHeart={props.addHeart}
          removeHeart={props.removeHeart} 
          sceneTransition={transition}
        
          // SOCKETS
          socketSetInput={props.socketSetInput}
          socketSceneTransition={props.socketSceneTransition}
          socketPuzzleToChoices={props.socketPuzzleToChoices}
          socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
          socketSetPath={props.socketSetPath}
          socketSetShow={props.socketSetShow}
          
          // PLAYERS
          playerId={props.playerId}
          playerArr={props.playerArr}>
        </DockThird>}

      {mode === FOURTH1 && 
        <DockFourth1 
          sceneTransition={transition}

          // SOCKETS
          socketSceneTransition={props.socketSceneTransition}
          
          // PLAYERS
          playerId={props.playerId}
          playerArr={props.playerArr}>
        </DockFourth1>}

      {mode === FOURTH2 && 
        <DockFourth2
          heart={props.heart}
          addHeart={props.addHeart}
          removeHeart={props.removeHeart}
          sceneTransition={transition}
        
          // SOCKETS
          socketSetInput={props.socketSetInput}
          socketSceneTransition={props.socketSceneTransition}
          socketPuzzleToChoices={props.socketPuzzleToChoices}
          socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
          socketSetPath={props.socketSetPath}
          socketSetShow={props.socketSetShow}
          
          // PLAYERS
          playerId={props.playerId}
          playerArr={props.playerArr}>
        </DockFourth2>}

      {mode === FIFTH && 
        <DockFifth 
          heart={props.heart}
          addHeart={props.addHeart}
          removeHeart={props.removeHeart} 
          sceneTransition={transition}

          // SOCKETS
          socketSetInput={props.socketSetInput}
          socketSceneTransition={props.socketSceneTransition}
          socketPuzzleToChoices={props.socketPuzzleToChoices}
          socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
          socketSetPath={props.socketSetPath}
          socketSetShow={props.socketSetShow}
          
          // PLAYERS
          playerId={props.playerId}
          playerArr={props.playerArr}>
        </DockFifth>}

      {mode === SIXTH && 
        <DockSixth 
          heart={props.heart}
          addHeart={props.addHeart}
          removeHeart={props.removeHeart}
          sceneTransition={transition}

          // SOCKETS
          socketSetInput={props.socketSetInput}
          socketSceneTransition={props.socketSceneTransition}
          socketPuzzleToChoices={props.socketPuzzleToChoices}
          socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
          socketSetPath={props.socketSetPath}
          socketSetShow={props.socketSetShow}
          
          // PLAYERS
          playerId={props.playerId}
          playerArr={props.playerArr}>
        </DockSixth>}
      {mode === SEVENTH && 
        <DockSeventh
          heart={props.heart}
          addHeart={props.addHeart}
          removeHeart={props.removeHeart}
          sceneTransition={transition}

          // SOCKETS
          socketSetInput={props.socketSetInput}
          socketSceneTransition={props.socketSceneTransition}
          socketPuzzleToChoices={props.socketPuzzleToChoices}
          socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
          socketSetPath={props.socketSetPath}
          socketSetShow={props.socketSetShow}
          
          // PLAYERS
          playerId={props.playerId}
          playerArr={props.playerArr}>
        </DockSeventh>}

        {mode === NINTH && 
        <DockNinth
          heart={props.heart}
          addHeart={props.addHeart}
          removeHeart={props.removeHeart}
          sceneTransition={transition}

          // SOCKETS
          socketSetInput={props.socketSetInput}
          socketSceneTransition={props.socketSceneTransition}
          socketPuzzleToChoices={props.socketPuzzleToChoices}
          socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
          socketSetPath={props.socketSetPath}
          socketSetShow={props.socketSetShow}
          
          // PLAYERS
          playerId={props.playerId}
          playerArr={props.playerArr}>
        </DockNinth>}

        {mode === DEATHWAREHOUSE && 
        <DockDeathWarehouse 
          sceneTransition={transition}

          // SOCKETS
          socketSceneTransition={props.socketSceneTransition}
          
          // PLAYERS
          playerId={props.playerId}
          playerArr={props.playerArr}>
        </DockDeathWarehouse>}
      {/* {mode === TITLE && <TitlePage sceneTransition={transition}></TitlePage>} */}
      {mode === DEAD && <GameOver text="You have died. Try another path next time." maxLen={60} ></GameOver>}
      {/* removeHeart ={props.removeHeart} */}
      {/* sceneTransition={transition} */}

      {/* {props.mode === SIXTH && <DockFirst transition={props.transition}></DockFirst>}
      {props.mode === SEVENTH && <DockFirst transition={props.transition}></DockFirst>}
      {props.mode === EIGHTH && <DockFirst transition={props.transition}></DockFirst>}
      {props.mode === NINTH && <DockFirst transition={props.transition}></DockFirst>}
      {props.mode === TENTH && <DockFirst transition={props.transition}></DockFirst>} */}
    </div>
  )
}