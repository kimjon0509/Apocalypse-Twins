import React, {useState} from 'react';
// import './App.css';

import './Application.scss'
import TitlePage from './components/Title-page/TitlePage'
//import Subway from './components/Scene/Subway/SubwayStart'
import Bus from './components/Scene/Bus/BusStart'
//import Dock from './components/Scene/Dock/DockStart'

// import BackgroundImage from "./images/BackgroundImage.jpg"

function Application() {
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
  const Bus = 'Bus';
  const Dock = 'Dock';

  return (
    <main className="App">
      {mode === SUBWAY && <Subway></Subway>}
      {/* {false && <Bus mode={mode }transition={transition}></Bus>}
      {false &&<Dock mode={mode }transition={transition}></Dock>} */}
    </main>
  );
}

export default Application;
