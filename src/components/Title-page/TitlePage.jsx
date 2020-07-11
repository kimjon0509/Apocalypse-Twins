import React, {useEffect, useState} from "react";
import Title from './Title'
import TitleImage from './TitleImage'
import TitleDescription from './TitleDescription'
import TitleButton from './TitleButton'

import './TitlePage.scss'

export default function TitlePage(props) {
  const descriptionStr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  return (
    <div className='main-page-layout'>
      <div className="main-page-left">
        <TitleImage></TitleImage>
      </div>
      <div className="main-page-right">
        <Title title={'Apocalypse Twins'}></Title>
        <TitleDescription description={descriptionStr}></TitleDescription>
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
