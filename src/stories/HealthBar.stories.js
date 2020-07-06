import React from 'react';
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import HealthBar from '../components/HealthBar';

storiesOf("HealthBar", module)
  .add("3 full hearts", () => <HealthBar health={3}></HealthBar>)
  .add("2 full hearts + 1 empty heart", () => <HealthBar health={2}></HealthBar>)
  .add("1 full heart + 2 empty hearts", () => <HealthBar health={1}></HealthBar>)
  .add("0 full hearts + 3 empty hearts", () => <HealthBar health={0}></HealthBar>)