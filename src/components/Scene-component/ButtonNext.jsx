import React, {useEffect, useState} from "react";
import './ButtonNext.scss'
import $ from 'jquery'

export default function ButtonNext(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a className='next' href="#" onClick={handleClick}>
      Next
    </a>
  )
}