import React from 'react';
// import './App.css';
import Description from './components/Description'
import TitlePage from './components/TitlePage'
import Title from './components/Title-page/Title'
import TitleImage from './components/Title-page/TitleImage'
import TitleDescription from './components/Title-page/TitleDescription'
import TitleButton from './components/Title-page/TitleButton'

import './Application.scss'

import BackgroundImage from "./images/BackgroundImage.jpg"

function Application() {
  const descriptionStr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  return (
    <main className="App">
      {/* <img src={BackgroundImage} alt="Background" className="background"></img> */}
      <div className="main-page-left">
        <TitleImage></TitleImage>
      </div>
      <div className="main-page-right">
        <Title title={'Apocalypse Twins'}></Title>
        <TitleDescription description={descriptionStr}></TitleDescription>
        <div className='main-page-buttons'>
          <TitleButton buttonText={'How to play'}></TitleButton>
          <TitleButton buttonText={'Start Game'}></TitleButton>
        </div>
      </div>
    </main>
  );
}

export default Application;
