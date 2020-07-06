import React from 'react';
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import ButtonChoice from '../components/ButtonChoice';

storiesOf("ButtonChoice", module)
  .add("Button Choices", () => <ButtonChoice choice1="Take the bus" choice2="Go to subway" choice3="Go to docks"></ButtonChoice>)