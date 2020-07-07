import React from 'react';
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import GameOver from '../components/Scene/GameOver/GameOverScreen';

storiesOf("GameOver", module)
  .add("GameOver", () => <GameOver text="You have died. Try another path next time." maxLen={60} ></GameOver>)