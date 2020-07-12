import React, {useEffect, useState} from "react";
import './InputClear.scss'

export default function InputClear(props) {

  return (
    <div className='clear-input-div'>
      <button 
        className='clear-input-field'
        onClick={() => {
          // props.setInput([]);
          props.socketSetInput([]);
          }}>
        Clear Input
      </button>
    </div>
  );
}
