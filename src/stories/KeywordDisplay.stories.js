import React from 'react';
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import Rune from '../components/keyword_display/Rune';
import InputField from '../components/keyword_display/InputField';
import KeywordDisplay from '../components/keyword_display/KeywordDisplay'

storiesOf("KeywordDisplay", module)
  .add("Runes", () => <Rune keyword={'hello'}></Rune>)
  .add("Input Field", () => <InputField keyword={'hello'}></InputField>)
  .add("Keyword Display", () => <KeywordDisplay></KeywordDisplay>)
