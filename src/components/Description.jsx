import React, {useEffect, useState} from "react";
import './Description.scss'
import $ from 'jquery'

export default function Description(props) {

  function format(text) {
    return (
      <>
        <span className='first-letter'>{text.charAt(0)}</span>
        {text.slice(1)}
      </>
    )
  };

  function splitText(text, maxLength){
    const splitTextArr = [];
    let lineStr = '';
    let lineCount = 0;
    let newString = text.split(' ');
    newString.map((word, i) => {
      lineCount += word.length;
      if (lineCount < maxLength) {
        lineStr += word + ' ';
  
      } else {
        console.log(lineStr.length)
        splitTextArr.push(lineStr);
        lineStr = '';
        lineCount = 0;
        lineCount += word.length;
        lineStr += word + ' ';
      }
      if (i === newString.length - 1) {
        console.log(lineStr.length)
        splitTextArr.push(lineStr);
        console.log(lineStr)
      }
    })
    return splitTextArr.map((sentence, i) => {
      return (
        // i === 0 ? <p className='text-content'>{format(sentence)}</p> : <p className='text-content'>{sentence}</p> 
        <p className='text-content'>{sentence}</p> 
      )
    })
  }

  return(
    <div className='description-text'>{splitText(props.text, props.maxLen)}</div>
  )
}


