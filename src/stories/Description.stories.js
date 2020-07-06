import React from 'react';
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import Description from '../components/Description';

const sampleTextArr = 'It’s been 4 years since the dead overtook the streets. You and your twin have managed to survive in an old, dilapidated apartment building. The two of you have… unusual abilities, which have undoubtedly helped keep you alive. have undoubtedly helped keep you alive.'

storiesOf("Description", module)
  .add("Description", () => <Description text={sampleTextArr} maxLen={60}></Description>)
