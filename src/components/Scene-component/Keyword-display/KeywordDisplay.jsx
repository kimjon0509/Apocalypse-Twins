import React, {useEffect, useState} from "react";
import Rune from "./Rune";
import InputField from './InputField'
import InputClear from './InputClear'
import InputSubmit from './InputSubmit'

import './KeywordDisplay.scss'

export default function KeywordDisplay(props) {
  const [input, setInput] = useState([]);
  const [InputFieldBoxClass, setInputFieldBoxClass] = useState('input-field-box');

  return (
    <div className='keyword-display'>
      <InputClear input={input} setInput={setInput}></InputClear>
      <InputField input={input} setInput={setInput} setInputFieldBoxClass={setInputFieldBoxClass} InputFieldBoxClass={InputFieldBoxClass} keyword={props.keyword}></InputField>
      <InputSubmit input={input} setInput={setInput} setInputFieldBoxClass={setInputFieldBoxClass} transition={props.transition} keyword={props.keyword}></InputSubmit>
      <Rune input={input} setInput={setInput} keyword={props.keyword}></Rune>
    </div>
  );
}
