import React, {useEffect, useState} from "react";
import Rune from "./Rune";
import InputField from './InputField'
import InputClear from './InputClear'
import InputSubmit from './InputSubmit'
import {webSocket} from '../../../webSocket'

import './KeywordDisplay.scss'

export default function KeywordDisplay(props) {
  const [input, setInput] = useState([]);
  const [InputFieldBoxClass, setInputFieldBoxClass] = useState('input-field-box');
  useEffect(() => {
    let mounted = true;
    if(mounted){
      webSocket.on('rune selected', (message) => {
        setInput(message);
      })

      webSocket.on('input box class', (message) => {
        setInputFieldBoxClass(message);
      })
    }

    return function cleanup() {
      webSocket.off('rune selected');
      webSocket.off('input box class');
    }
    return () => mounted = false;
  }, [])

  return (
    <div className='keyword-display'>
      <InputClear
        input={input}
        setInput={setInput}

        //sockets
        socketSetInput={props.socketSetInput}
        
      
      ></InputClear>
      <InputField
        input={input}
        setInput={setInput}
        setInputFieldBoxClass={setInputFieldBoxClass}
        InputFieldBoxClass={InputFieldBoxClass}
        keyword={props.keyword}

      // socket={props.socket}

      ></InputField>
      <InputSubmit 
      input={input}
      setInput={setInput}
      setInputFieldBoxClass={setInputFieldBoxClass}
      puzzleToChoices={props.puzzleToChoices}
      sceneTransition={props.sceneTransition}
      pass={props.pass}
      keyword={props.keyword}
      scene={props.scene}
      //
      setPath={props.setPath}

      playerId={props.playerId}
      playerArr={props.playerArr}

      //sockets
      socketPuzzleToChoices={props.socketPuzzleToChoices}
      socketSetInput={props.socketSetInput}
      socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
      socketSceneTransition={props.socketSceneTransition}
      socketSetPath={props.socketSetPath}
      ></InputSubmit>
      <Rune 
      input={input}
      setInput={setInput}
      keyword={props.keyword}

      //sockets
      socketSetInput={props.socketSetInput}

      playerId={props.playerId}
      playerArr={props.playerArr}
      ></Rune>
    </div>
  );
}
