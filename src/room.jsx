import React, {useEffect, useState} from "react";
import {webSocket} from './webSocket';

const classNames = require('classnames');

export default function Room(props) {

  return (
  <>
  <button onClick={() => {
    // props.nextPage('TitlePage')
    // props.webSocket.emit('join', 'room 1')
    webSocket.emit('join', 'room 1')
    props.transport('TitlePage')
  }}
  >room 1</button>
  <button>room 2</button>
  </>
  )
}