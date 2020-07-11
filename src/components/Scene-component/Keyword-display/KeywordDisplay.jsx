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

    webSocket.on('rune selected', (message) => {
      setInput(message);
    })

    webSocket.on('input box class', (message) => {
      setInputFieldBoxClass(message);
    })

  return (
    <div className='keyword-display'>
      <InputClear
        input={input}
        setInput={setInput}

        //sockets
         showSelectedRune={props.showSelectedRune}
        
      
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

      //sockets
      socketPuzzleToChoices={props.socketPuzzleToChoices}
      showSelectedRune={props.showSelectedRune}
      socketSetInputFieldBoxClass={props.socketSetInputFieldBoxClass}
      socketSceneTransition={props.socketSceneTransition}
      socketSetPath={props.socketSetPath}
      ></InputSubmit>
      <Rune 
      input={input}
      setInput={setInput}
      keyword={props.keyword}

      //sockets
      showSelectedRune={props.showSelectedRune}
      ></Rune>
    </div>
  );
}
