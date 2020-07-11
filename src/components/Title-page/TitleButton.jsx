import React, {useEffect, useState} from "react";
import './TitleButton.scss'


export default function TitleButton(props) {

  return (
    <button className="main-page-button" onClick={() => {
      props.transport('Subway');
      props.nextPage('Subway')}
    }>{props.buttonText}</button>
  );
}
