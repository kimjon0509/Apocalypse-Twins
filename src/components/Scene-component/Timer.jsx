import React, {useEffect} from "react";
import './Timer.scss'

export default function Timer(props) {
  let timeout;
  useEffect(() => {
    if (props.pass) {
      timeout = setTimeout(() => {
        props.socketSceneTransition(props.scene)
      }, 45000)
    } else if (props.scene) {
      timeout = setTimeout(() => {
        props.removeHeart()
        props.socketSceneTransition(props.scene)
      }, 45000)
    } else {
      timeout = setTimeout(() => {
        props.socketPuzzleToChoices('Choices');
      }, 45000)
    }
    return function cleanup() {
      console.log("KILL TIMEOUT!")
      clearTimeout(timeout);
    }
  }, [])

  return (
    <div className="timerbar">
        <span className="timer"></span>
    </div>
  );
}
