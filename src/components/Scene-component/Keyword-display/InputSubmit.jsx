import React, {useEffect, useState} from "react";

import './InputSubmit.scss'
const classNames = require('classnames');

export default function InputSubmit(props) {
  let answerIncorrectBool = false;
  function checkAnswer(e) {

    function decodeHtml(html) {
      let txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    }

    e.preventDefault();
    const rune = {
      a: '&#5860;',
      b: '&#5858;',
      c: '&#5854;',
      d: '&#5824;',
      e: '&#5856;',
      f: '&#5792;',
      g: '&#5816',
      h: '&#5819;',
      i: '&#5857;',
      j: '&#5812;',
      k: '&#5827;',
      l: '&#5847;',
      m: '&#5855;',
      n: '&#5832;',
      o: '&#5809;',
      p: '&#5840;',
      q: '&#5861;',
      r: '&#5839;',
      s: '&#5866;',
      t: '&#5795;',
      u: '&#5870;',
      v: '&#5871;',
      w: '&#5867;',
      x: '&#5852;',
      y: '&#5831;',
      z: '&#5827;',
    }
    let correctAnswer = true;
    if (props.input.length === props.keyword.length) {
      let tempInputArr = [...props.input]
      let inputCheck = tempInputArr.map((runeClicked,i) => {
          return runeClicked === decodeHtml(rune[props.keyword[i]]);
      })

      inputCheck.includes(false) ? correctAnswer = false : correctAnswer = true

    } else {
      correctAnswer = false;
    }
    
    if (correctAnswer) {
      // console.log('correct');
      // props.setInputFieldBoxClass('input-field-box')
      if (props.pass) {
        console.log('here', props.scene)
        props.sceneTransition(props.scene)
      } else{
        props.setPath(true)
        props.puzzleToChoices('Choices');
      }

    } else {
      props.setInput([]);
      props.setInputFieldBoxClass('input-field-box incorrect')
      setTimeout(() => {props.setInputFieldBoxClass('input-field-box')}, 500)
    }
  }
  

  return (
    <div className='submit-input-div'>
      <button className='submit-input-field' onClick={checkAnswer}>
        Submit Answer
      </button>
    </div>
  );
}
