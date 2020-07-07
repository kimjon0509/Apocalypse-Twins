import React, {useEffect, useState} from "react";
import './Timer.scss'
import $ from 'jquery'

// const classNames = require('classnames');

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
    setTimeout(() => {
      props.transition('Choices')
    }, 45000)
  }, [])

  return (
    <div className="timerbar">
        <span className="timer"></span>
    </div>
  );
}
