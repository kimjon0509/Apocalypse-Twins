import React from 'react';
import { storiesOf } from "@storybook/react";
import Application from '../Application';

storiesOf("Applicaton", module)
  .add("Start to subway", () => <Application></Application>)