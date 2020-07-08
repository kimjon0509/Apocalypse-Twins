import React, {useEffect, useState} from "react";
import './ButtonNext.scss'
import $ from 'jquery'

export default function ButtonNext(props) {

  return (
    <a className='next' onClick={() => {props.transition(props.scene)}}>
      Next
    </a>
  )
}