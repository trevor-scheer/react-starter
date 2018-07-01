import {configure} from '@storybook/react';

function loadStories() {
  require('./stories/index.js');
  // Require additional stories here
}

configure(loadStories, module);
