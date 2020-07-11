import React, {useEffect, useState} from "react";
import {webSocket} from './webSocket';

import './room.scss'
const classNames = require('classnames');

export default function Room(props) {

  const [name, setName] = useState("");
  const [roomArr, setRoomArr] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    setRoomArr([...roomArr, name])
    props.socketSetRoomArr([...roomArr, name])
    console.log(name)
  };

  const rooms =  roomArr.map((roomName , i) => {
    return (
    <button className={'room'} key={i} onClick={() => {
      webSocket.emit('join', roomName)
      props.transport('TitlePage')
    }}>
      {roomName}
    </button>
    );
  });

  webSocket.on('room list', (message) => {
    setRoomArr(message)
  });

  return (
  <div className='room-layout'>
    <h1 className="room-title"> Rooms </h1>
    <form className="form-align"> 
    <label className="room-label">
      <span className="room-label">Room: </span>
      <input className={'input-text'}type="text" name="room" size='15' autofocus onChange={e => {setName(e.target.value)
      }}/>
    </label>
    <input className="room-label" type="submit" value="Create Room" onClick={handleSubmit} />
  </form>
  <div className='room-wrap'>
    <button className={'room'} onClick={() => {
        // props.nextPage('TitlePage')
        // props.webSocket.emit('join', 'room 1')
        webSocket.emit('join', 'Zombie')
        props.transport('TitlePage')
      }}
      >Zombie</button>
      <button className={'room'} onClick={() => {
        // props.nextPage('TitlePage')
        // props.webSocket.emit('join', 'room 1')
        webSocket.emit('join', 'Dragon')
        props.transport('TitlePage')
      }}>Dragon</button>
      <button className={'room'} onClick={() => {
        // props.nextPage('TitlePage')
        // props.webSocket.emit('join', 'room 1')
        webSocket.emit('join', 'Witch')
        props.transport('TitlePage')
      }}>Witch</button>
      <button className={'room'} onClick={() => {
        // props.nextPage('TitlePage')
        // props.webSocket.emit('join', 'room 1')
        webSocket.emit('join', 'Brain')
        props.transport('TitlePage')
      }}>Brain</button>
      <button className={'room'} onClick={() => {
        // props.nextPage('TitlePage')
        // props.webSocket.emit('join', 'room 1')
        webSocket.emit('join', 'Death')
        props.transport('TitlePage')
      }}>Death</button>
      {rooms}
  </div>
  </div>
  )
}