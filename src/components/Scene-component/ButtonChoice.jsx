import React from "react";
import './ButtonChoice.scss'

export default function ButtonChoice(props) {
  let classname;

  if (props.correctPath) {
    classname = 'next ' + props.correctPath;
    console.log(classname)
  } else {
    classname = 'next';
  }

  console.log(props.scene)

  return (
    <div className='choices'>
      <div className={classname} onClick={() => {props.sceneTransition(props.scene)}}>
        {props.choice}
      </div>
    </div>
  )
}