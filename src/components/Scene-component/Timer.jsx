import React, {useEffect, useState} from "react";
import './Timer.scss'
import $ from 'jquery'

// const classNames = require('classnames');
let timeout

export default function Timer(props) {

  // const [timeleft, setTimeLeft] = useState(props.timeleft)

  // function progress(timeleft, timetotal, $element) {
  //   var progressBarWidth = timeleft * $element.width() / timetotal;
  //   $element.find('.bar').animate({ width: progressBarWidth })
  //   if(timeleft > 5) {
  //       progress(timeleft - 1, timetotal, $('.progressBar')); 
  //   } else if (timeleft >= 0) {
  //       progress(timeleft - 1, timetotal, $('.progressBar.red'));
  //   }
  // };
  useEffect(() => {
    if (timeout) {
      clearTimeout(timeout);
    }
    if (props.pass) {
      timeout = setTimeout(() => {
        props.sceneTransition('dead')
      }, 45000)
    } else if (props.scene) {
      timeout = setTimeout(() => {
        props.sceneTransition('eleventh')
      }, 45000)
    } else {
      timeout = setTimeout(() => {
        props.puzzleToChoices('Choices');
      }, 45000)
    }
  }, [])

  return (
    <div className="timerbar">
        <span className="timer"></span>
    </div>
  );
}
