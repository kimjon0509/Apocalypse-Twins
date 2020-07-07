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
      <InputField input={input} setInput={setInput} setInputFieldBoxClass={setInputFieldBoxClass} InputFieldBoxClass={InputFieldBoxClass} keyword={'hello'}></InputField>
      <InputSubmit input={input} setInput={setInput} setInputFieldBoxClass={setInputFieldBoxClass} keyword={'hello'}></InputSubmit>
      <Rune input={input} setInput={setInput} keyword={'hello'}></Rune>
    </div>
  );
}
