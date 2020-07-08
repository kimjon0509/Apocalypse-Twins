import React, {useEffect, useState} from "react";
import './ButtonNext.scss'
import $ from 'jquery'

export default function ButtonNext(props) {

  return (
    <a className='next' onClick={() => {props.sceneTransition(props.scene)}}>
      Next
    </a>
  )
}