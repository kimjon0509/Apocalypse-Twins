import React, {useEffect, useState} from "react";
import './InputClear.scss'

export default function InputClear(props) {

  return (
    <div className='clear-input-div'>
      <button 
        className='clear-input-field'
        onClick={() => {
          props.setInput([]);
          props.showSelectedRune([]);
          }}>
        Clear Input
      </button>
    </div>
  );
}
