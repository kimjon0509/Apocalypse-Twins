import React, {useEffect, useState} from "react";
import './TitleImage.scss'
import TitleImage2 from "../../images/apocalypse-twins-title.png"

export default function TitleImage(props) {

  return (
    <img className="title-page-image" src={TitleImage2}/>
  );
}