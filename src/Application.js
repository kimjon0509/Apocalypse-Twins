import React, {useState, useEffect} from 'react';
import { webSocket } from './webSocket';

import './Application.scss'
import TitlePage from './components/Title-page/TitlePage'
import Subway from './components/Scene/Subway/SubwayStart'
import Bus from './components/Scene/Bus/BusStart'
import Dock from './components/Scene/Docks/DockStart'

import HeartEmpty from './components/Scene-component/HeartEmpty'
import HeartFull from './components/Scene-component/HeartFull'
import IntroFirst from './components/Scene/Intro/IntroFirst'
import IntroSecond from './components/Scene/Intro/IntroSecond'
import IntroThird from './components/Scene/Intro/IntroThird'
import IntroFourth from './components/Scene/Intro/IntroFourth'
import IntroFifth from './components/Scene/Intro/IntroFifth'

import Room from './room'

function Application() {
  const [playerArr, setPlayerArr] = useState([]);
  const [room , setRoom] = useState(0)
  const [playerId, setPlayerId] = useState('')

  useEffect(() => {
    
    webSocket.on('game', (scene) => {
      console.log('client scene')
      transition(scene);
    })

    webSocket.on('room connected', (message) => {
      console.log('check')
      setRoom(message.room)
      setPlayerId(message.playerId)
      console.log(message);
    })
    webSocket.on('new user', (message) => {
      console.log('new user')
      setPlayerArr(message.players);
      // console.log('player arr', playerId)
    })
    webSocket.on('room full', (message) => {
      console.log('room full')
      console.log(message);
    })
  
  }, []);

  function useHeart(initial) {
    const [heart, setHeart] = useState(initial);
  
    function addHeart() {
      setHeart(prev => {
          return [...prev, <HeartFull />];
      });
    }

    function removeHeart() {
      setHeart(prev => {
          return [...prev.slice(1), <HeartEmpty />];
        })
      };

    return {heart, addHeart, removeHeart };
  }

  const {heart, addHeart, removeHeart} = useHeart([<HeartFull />,<HeartFull />,<HeartFull />])

 const [path, setPath] = useState(false)

  function useTransport(initial) {
    const [transport, setTransport] = useState([initial]);
  
    function transition(changeMode, replace = false) {
      setTransport(prev => {
        if (replace) {
          return [changeMode, ...prev.slice(1)];
        } else {
          return [changeMode, ...prev];
        }
      });
    }
  
    return {mode: transport[0], transition };
  }

  const {mode, transition} = useTransport('room')

  const START = 'TitlePage';
  const SUBWAY = 'Subway';
  const BUS = 'Bus';
  const DOCK = 'Dock';
  const INTROFIRST = 'introFirst';
  const INTROSECOND = 'introSecond';
  const INTROTHIRD = 'introThird';
  const INTROFOURTH = 'introFourth';
  const INTROFIFTH = 'introFifth';

  const ROOM = 'room';


    // web socket functions
    const nextPage = (scene) => {
      console.log(webSocket)
      webSocket.emit('game', scene, room);
    } 
  
    const socketSetInput = (selected) => {
      webSocket.emit('rune selected', selected, room)
    }

    const socketSetShow = (message) => {
      webSocket.emit('show', message, room)
    }
  
    // const timerRunOut = (message) => {
    //   webSocket.emit('timer', message, room)
    // }

    const socketSceneTransition = (scene) => {
      webSocket.emit('scene', scene, room)
    }

    const socketPuzzleToChoices = (message) => {
      webSocket.emit('puzzle to choices', message, room)
    }

    const socketSetInputFieldBoxClass = (message) => {
      webSocket.emit('input box class', message, room)
    }

    const socketSetPath = (message) => {
      console.log(message)
      webSocket.emit('show best path', message, room)
    }

    const socketSetRoomArr = (message) => {
      webSocket.emit('room list', message)
    }
    //////////////////////////////////////////////////
    
  return (
    <main className="App">

    { mode === ROOM && 
    <Room 
      transport={transition}
      socketSetRoomArr={socketSetRoomArr}
      ></Room>}

    { mode === START && 
      <TitlePage
      socketSceneTransition={nextPage}

      transport={transition}
      playerArr={playerArr}
      ></TitlePage>}

     { mode === BUS && 
     <Bus
      //sockets
      socketSetInput={socketSetInput}
      socketSceneTransition={socketSceneTransition}
      socketPuzzleToChoices={socketPuzzleToChoices}
      socketSetInputFieldBoxClass={socketSetInputFieldBoxClass}
      socketSetPath={socketSetPath}
      socketSetShow={socketSetShow}
      
      heart={heart}
      addHeart={addHeart}
      removeHeart={removeHeart}

      playerId={playerId}
      playerArr={playerArr}
     ></Bus>
     }

    {mode === SUBWAY && 
        <Subway 
        //sockets
          socketSetInput={socketSetInput}
          // timerRunOut={timerRunOut}
          socketSceneTransition={socketSceneTransition}
          socketPuzzleToChoices={socketPuzzleToChoices}
          socketSetInputFieldBoxClass={socketSetInputFieldBoxClass}
          socketSetPath={socketSetPath}
          socketSetShow={socketSetShow}
          
          heart={heart}
          addHeart={addHeart}
          removeHeart={removeHeart}

          playerId={playerId}
          playerArr={playerArr}
        ></Subway>
    }

    {mode === DOCK && 
        <Dock 
          heart={heart}
          addHeart={addHeart}
          removeHeart={removeHeart}
        ></Dock>
    }

    { mode === INTROFIRST && 
      <IntroFirst 
        sceneTransition={transition}

        socketSceneTransition={nextPage}
        socketPuzzleToChoices={socketPuzzleToChoices}
        socketSetShow={socketSetShow}
        ></IntroFirst>}

    { mode === INTROSECOND && 
      <IntroSecond
        sceneTransition={transition}

        playerId={playerId}
        playerArr={playerArr}
        
        socketSceneTransition={nextPage}
        socketSetInput={socketSetInput}
        socketPuzzleToChoices={socketPuzzleToChoices}
        socketSetInputFieldBoxClass={socketSetInputFieldBoxClass}
        socketSetPath={socketSetPath}
        socketSetShow={socketSetShow}
      ></IntroSecond>}

    { mode === INTROTHIRD && 
      <IntroThird
        sceneTransition={transition}

        socketSceneTransition={nextPage}
        socketPuzzleToChoices={socketPuzzleToChoices}
        socketSetShow={socketSetShow}
      ></IntroThird>}

    { mode === INTROFOURTH && 
      <IntroFourth
        sceneTransition={transition}

        socketSceneTransition={nextPage}
        socketSetInput={socketSetInput}
        socketPuzzleToChoices={socketPuzzleToChoices}
        socketSetInputFieldBoxClass={socketSetInputFieldBoxClass}
        socketSetPath={socketSetPath}
        socketSetShow={socketSetShow}
      ></IntroFourth>}

    { mode === INTROFIFTH && 
      <IntroFifth
        sceneTransition={transition}

        socketSceneTransition={nextPage}
        socketSetInput={socketSetInput}
        socketPuzzleToChoices={socketPuzzleToChoices}
        socketSetInputFieldBoxClass={socketSetInputFieldBoxClass}
        socketSetPath={socketSetPath}
        socketSetShow={socketSetShow}
      ></IntroFifth>}

    
    </main>
  );
}

export default Application;
