import React, {useState} from 'react';
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

// import BackgroundImage from "./images/BackgroundImage.jpg"

function Application() {

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

  const {mode, transition} = useTransport('TitlePage')

  const START = 'TitlePage';
  const SUBWAY = 'Subway';
  const BUS = 'Bus';
  const DOCK = 'Dock';
  const INTROFIRST = 'introFirst';
  const INTROSECOND = 'introSecond';
  const INTROTHIRD = 'introThird';
  const INTROFOURTH = 'introFourth';
  const INTROFIFTH = 'introFifth';

  return (
    <main className="App">

    { mode === START && <TitlePage transport={transition}></TitlePage>}

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
