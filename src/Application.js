import React, {useState} from 'react';
// import './App.css';

import './Application.scss'
import TitlePage from './components/Title-page/TitlePage'
//import Subway from './components/Scene/Subway/SubwayStart'
import BusStart from './components/Scene/Bus/BusStart'
//import Dock from './components/Scene/Dock/DockStart'

import HeartEmpty from './components/Scene-component/HeartEmpty'
import HeartFull from './components/Scene-component/HeartFull'

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

  const {mode, transition} = useTransport('Bus')

  const START = 'TitlePage';
  const SUBWAY = 'Subway';
  const BUS = 'Bus';
  const DOCK = 'Dock';

  return (
    <main className="App">
     { mode === BUS && 
     <BusStart
      heart={heart}
      addHeart={addHeart}
      removeHeart={removeHeart}
     ></BusStart>}
      { /*{mode === SUBWAY && 
        <Subway 
          heart={heart}
          addHeart={addHeart}
          removeHeart={removeHeart}
        ></Subway>}
      {/* {false && <Bus mode={mode }transition={transition}></Bus>}
      {false &&<Dock mode={mode }transition={transition}></Dock>} */}
    </main>
  );
}

export default Application;
