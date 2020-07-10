import React, {useEffect, useState} from "react";

const classNames = require('classnames');

export default function Room(props) {
  useEffect(() => {
  }
  ,[])
  return (
  <>
  <button onClick={() => {
    // props.nextPage('TitlePage')
    props.socket.emit('join', 'room 1')
    props.transport('TitlePage')
  }}
  >room 1</button>
  <button>room 2</button>
  </>
  )
}