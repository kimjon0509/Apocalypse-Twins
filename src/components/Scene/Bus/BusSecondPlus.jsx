import React, { useEffect, useState } from "react";
import ButtonNext from '../../Scene-component/ButtonNext';
import Description from '../../Scene-component/Description';
import HealthBar from '../../Scene-component/HealthBar';
import ButtonChoice from '../../Scene-component/ButtonChoice';
import {webSocket} from '../../../webSocket';

const classNames = require('classnames');

export default function BusSixth(props) {

  function usePuzzleToChoices(initial) {
    const [history, setHistory] = useState([initial]);

    function transition(changeMode, replace = false) {
      setHistory(prev => {
        if (replace) {
          return [changeMode, ...prev.slice(1)];
        } else {
          return [changeMode, ...prev];
        }
      });
    }

    function back() {
      setHistory(prev => {
        if (prev.length > 1) {
          return prev.slice(1);
        } else {
          return prev;
        }
      });
    }

    return { mode: history[0], transition, back };
  }

  const CHOICES = 'Choices'

  const { mode, transition } = usePuzzleToChoices('Choices')
  const [show, setShow] = useState(false)
  const styleShow = show ? {} : { visibility: 'hidden' }
  useEffect(() => {
    
      webSocket.on('puzzle to choices', (message) => {
        transition(message);
      });
  }, [])

  const sceneDescription = "As you are trying to hotwire the bus, you hear sudden screeching, coming in your direction. You just need a few more seconds. Glancing through the windshield, you see zombies rushing towards you at frightening speed. You lunge for the door lever and pull. The zombies run headfirst into the glass, howling and slamming themselves against it. At last the wires catch and the bus growls to life. You slam the pedal to the floor, plowing through the zombies, crushing their rotting forms with the hulk of the bus. The engine thunders as you swerve onto the street, the trailing zombies falling quickly behind...";

  const testDesc = "Hello my name is blah Hello my name is blah Hello my name is blah"
  return (
    <div className='scene-layout'>
      <div className='heart-right'>
        <div style={styleShow} className='show-animation'>
          {<HealthBar heart={props.heart} ></HealthBar>}
        </div>
      </div>
      <Description className='descripton-layout' setShow={setShow} puzzleToChoices={transition} text={sceneDescription} maxLen={55}></Description>
      <div style={styleShow} className='show-animation'>
        {mode === CHOICES &&
          <>
            <ButtonChoice 
            scene={"second"} 
            sceneTransition={props.sceneTransition} 
            choice={"Next"}
            socketSceneTransition={props.socketSceneTransition}
            >
            </ButtonChoice>
          </>
        }
      </div>
    </div>
  )
}