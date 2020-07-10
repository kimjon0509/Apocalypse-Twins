import React, {useState, useEffect} from 'react';
// import './App.css';

import './Application.scss'
import TitlePage from './components/Title-page/TitlePage'
import Subway from './components/Scene/Subway/SubwayStart'
import Bus from './components/Scene/Bus/BusStart'
import Dock from './components/Scene/Docks/DockStart'
//import Dock from './components/Scene/Dock/DockStart'

import HeartEmpty from './components/Scene-component/HeartEmpty'
import HeartFull from './components/Scene-component/HeartFull'
import IntroFirst from './components/Scene/Intro/IntroFirst'
import IntroSecond from './components/Scene/Intro/IntroSecond'
import IntroThird from './components/Scene/Intro/IntroThird'
import IntroFourth from './components/Scene/Intro/IntroFourth'
import IntroFifth from './components/Scene/Intro/IntroFifth'

import Room from './room'

//socket client
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3001";

//USE THIS LATER FOR RUNES
// props.playerArr[1] === props.playerId


// import BackgroundImage from "./images/BackgroundImage.jpg"

function Application() {
  const [playerArr, setPlayerArr] = useState([]);
  const [room , setRoom] = useState(0)
  const [playerId, setPlayerId] = useState('')

  let socket = socketIOClient(ENDPOINT);;
  // let playerArr;
  useEffect(() => {
    // socket = socketIOClient(ENDPOINT);

    // socket.emit('system', 'playerId')

    // socket.on('system', (message) => {
    //   console.log(message.player);
    //   playerArr = message.player
    // });

    console.log(socket)

    socket.on('game', (scene) => {
      console.log('client scene')
      transition(scene);
    })

    socket.on('room connected', (message) => {
      console.log('check')
      setRoom(message.room)
      setPlayerId(message.playerId)
      console.log(message);
    })
    socket.on('new user', (message) => {
      console.log('new user')
      setPlayerArr(message.players);
      // console.log('player arr', playerId)
    })
    socket.on('room full', (message) => {
      console.log('room full')
      console.log(message);
    })
  
  }, []);

  const nextPage = (scene) => {
    console.log(socket)
    socket.emit('game', scene, room);
  } 


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
  return (
    <main className="App">

    { mode === ROOM && 
    <Room 
      nextPage={nextPage}
      transport={transition}
      socket={socket}
      ></Room>}

    { mode === START && 
      <TitlePage
      nextPage={nextPage}
      transport={transition}
      room={room}
      playerArr={playerArr} 
      playerId={playerId}
      ></TitlePage>}

     { mode === BUS && 
     <Bus
      heart={heart}
      addHeart={addHeart}
      removeHeart={removeHeart}
     ></Bus>
     }

    {mode === SUBWAY && 
        <Subway 
          heart={heart}
          addHeart={addHeart}
          removeHeart={removeHeart}
        ></Subway>
    }

    {mode === DOCK && 
        <Dock 
          heart={heart}
          addHeart={addHeart}
          removeHeart={removeHeart}
        ></Dock>
    }

    { mode === INTROFIRST && <IntroFirst sceneTransition={transition}></IntroFirst>}
    { mode === INTROSECOND && <IntroSecond sceneTransition={transition}></IntroSecond>}
    { mode === INTROTHIRD && <IntroThird sceneTransition={transition}></IntroThird>}
    { mode === INTROFOURTH && <IntroFourth sceneTransition={transition}></IntroFourth>}
    { mode === INTROFIFTH && <IntroFifth sceneTransition={transition}></IntroFifth>}

    
    </main>
  );
}

export default Application;
