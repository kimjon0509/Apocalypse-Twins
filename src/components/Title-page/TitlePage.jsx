import React, {useEffect, useState} from "react";
import Title from './Title'
import TitleImage from './TitleImage'
import TitleDescription from './TitleDescription'
import TitleButton from './TitleButton'

import './TitlePage.scss'

export default function TitlePage(props) {

  return (
    <div className='main-page-layout'>
      <div className="main-page-left">
        <TitleImage></TitleImage>
      </div>
      <div className="main-page-right">
        <Title title={'Apocalypse Twins'}></Title>
      <div className='main-page-buttons'>
        <TitleButton buttonText={'How to play'}></TitleButton>

        {props.playerArr[1] &&
         <TitleButton
         buttonText={'Start Game'}
         transport={props.transport}
         socketSceneTransition={props.socketSceneTransition}
         ></TitleButton>
        }
      
      </div>
    </div>
  </div>
);
}
