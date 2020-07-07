import React, {useEffect, useState} from "react";
import './TitleDescription.scss'


export default function TitleDescription(props) {

  return (
    <p className="main-page-description">{props.description}</p>
  );
}
