import React, { useEffect, useState } from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import Description from '../../Scene-component/Description';
import Timer from '../../Scene-component/Timer';
import KeywordDisplay from '../../Scene-component/Keyword-display/KeywordDisplay';
import HealthBar from '../../Scene-component/HealthBar';

import { webSocket } from '../../../webSocket';

const classNames = require('classnames');

export default function BusFirst(props) {
  const [show, setShow] = useState(false)
  const sceneDescription = "\“You both need to get to the hospital. Fast. Maybe you could take the subway tunnels. There’s also that old bus sitting in the lot out back. Or you could try your luck with the boaters.\”\n*Vince passes out.*\n\“Either way, you better hurry.\”";

  const testDesc = "Hello I'm in the country road now"

  function usePuzzleToChoices(initial) {
    const [history, setHistory] = useState([initial]);

    function transition(changeMode, replace = false) {
      setHistory(prev => {
        if (replace) {
          return [changeMode, ...prev.slice(1)];
        } else {
          return [changeMode, ...prev];
        }
      });
    }

    return { mode: history[0], transition };
  }
  useEffect(() => {
    webSocket.on('puzzle to choices', (message) => {
      transition(message);
    });

    webSocket.on('show', (message) => {
      setShow(message);
    });
  }, [])

  const CHOICES = 'Choices'
  const styleShow = show ? {} : { visibility: 'hidden' }
  const { mode, transition } = usePuzzleToChoices('Choices')
  return (
    <div className='scene-layout'>
      <Description 
        className='descripton-layout' 
        setShow={setShow} 
        text={sceneDescription} 
        maxLen={55}

        scoketPuzzleToChoices={props.socketPuzzleToChoices}
        socketSetShow={props.socketSetShow}
      ></Description>

      <div style={styleShow} className='show-animation'>
        <div className='heart-right'>
          {mode === CHOICES &&
            <>
              <ButtonChoice 
                choice={'Subway'} 
                scene={'Subway'} 
                sceneTransition={props.sceneTransition}
        
                socketSceneTransition={props.socketSceneTransition}
              ></ButtonChoice>
              <ButtonChoice 
                choice={'Bus'} 
                scene={'Bus'} 
                sceneTransition={props.sceneTransition}
                
                socketSceneTransition={props.socketSceneTransition}
          
                ></ButtonChoice>
              <ButtonChoice 
                choice={'Dock'} 
                scene={'Dock'}
                sceneTransition={props.sceneTransition}

                socketSceneTransition={props.socketSceneTransition}

              ></ButtonChoice>
            </>
          }
        </div>
      </div>

    </div>
  )
}