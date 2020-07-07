import React, {useEffect, useState} from "react";
import './Title.scss'


export default function Title(props) {

  return (
    <h1 className="main-title">
      {props.title}
    </h1>
  );
}
