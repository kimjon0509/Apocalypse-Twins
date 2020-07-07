import React from "react";
import './ButtonChoice.scss'

export default function ButtonChoice(props) {
  function handleClick1(e) {
    e.preventDefault();
    console.log('link1 was clicked.');
  }
  function handleClick2(e) {
    e.preventDefault();
    console.log('link2 was clicked.');
  }
  function handleClick3(e) {
    e.preventDefault();
    console.log('link3 was clicked.');
  }

  return (
    <div className="choices">
    <a className='next' href="#" onClick={handleClick1}>
      {props.choice1}
    </a>
    <a className='next' href="#" onClick={handleClick2}>
      {props.choice2}
    </a>
    {props.choice3 &&
    <a className='next' href="#" onClick={handleClick3}>
      {props.choice3}
    </a>
    }
    </div>
  )
}