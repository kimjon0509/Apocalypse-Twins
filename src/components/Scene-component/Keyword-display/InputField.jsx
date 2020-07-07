import React, {useEffect, useState} from "react";
import './InputField.scss'


export default function InputField(props) {
  function inputFieldBlock() {
    if (props.input.length <= props.keyword.length ) {
      let inputFieldBox =props.keyword.split('').map((char, i) => {
        return i
      })
      return inputFieldBox.map(index => {
        return (
          <div className={props.InputFieldBoxClass} key={index}>
            {props.input[index] || ''}
          </div>
        )
      })
    // } else {
    //   return <div>way too long</div>
    }
  }
  return (
    <div className='input-field'>
      {inputFieldBlock()}
    </div>
  );
}
