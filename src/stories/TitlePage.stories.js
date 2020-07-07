import React from 'react';
import { storiesOf } from "@storybook/react";
import TitlePage from '../components/Title-page/TitlePage';

storiesOf("Title Page", module)
  .add("Main Screen", () => <TitlePage></TitlePage>)