import React from 'react';
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import Rune from '../components/Scene-component/Keyword-display/Rune';
import InputField from '../components/Scene-component/Keyword-display/InputField';
import KeywordDisplay from '../components/Scene-component/Keyword-display/KeywordDisplay'

storiesOf("KeywordDisplay", module)
  // .add("Runes", () => <Rune keyword={'hello'}></Rune>)
  // .add("Input Field", () => <InputField keyword={'hello'}></InputField>)
  .add("Keyword Display", () => <KeywordDisplay keyword={'hello'}></KeywordDisplay>)
