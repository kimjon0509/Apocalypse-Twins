import React from 'react';
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import HealthBar from '../components/HealthBar';

storiesOf("HealthBar", module)
  .add("Health Bar", () => <HealthBar health={3}></HealthBar>)