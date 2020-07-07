import React, {useEffect, useState} from "react";
import './GameOverScreen.scss'
import Description from '../../Scene-component/Description';

export default function GameOver(props) {
  return (
    <div className="gameover-screen">
      <h1 className="gameover-text">GAME OVER</h1>
      <div className='seperator-gameover'>
        <p className="gameover-description">
          <Description text={props.text} maxLen={50}></Description>
        </p>
      </div>
    </div>
  )
}