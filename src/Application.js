import React, {useState} from 'react';
// import './App.css';

import './Application.scss'
import TitlePage from './components/Title-page/TitlePage'
import Subway from './components/Scene/Subway/SubwayStart'
import Bus from './components/Scene/Bus/BusStart'
import Dock from './components/Scene/Dock/DockStart'

// import BackgroundImage from "./images/BackgroundImage.jpg"

function Application() {
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
  
    function back() {
      setScene(prev => {
        if (prev.length > 1) {
          return prev.slice(1);
        } else {
          return prev;
        }
      });
    }
  
    return {mode: scene[0], transition, back };
  }

  const {mode, transition} = useScene('TitlePage')
  const START = 'TitlePage';
  const SUBWAY = 'Subway';
  const Bus = 'Bus';
  const Dock = 'Dock';

  return (
    <main className="App">
      {true && <Subway mode={mode }transition={transition}></Subway>}
      {false && <Bus mode={mode }transition={transition}></Bus>}
      {false &&<Dock mode={mode }transition={transition}></Dock>}
    </main>
  );
}

export default Application;
