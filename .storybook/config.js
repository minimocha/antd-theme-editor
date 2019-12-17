import { configure } from '@storybook/react';

import "../src/style.less";
import '../css/style.css';
import '../css/icons.css';

function loadStories() {
  require('../src/stories/General/');
  require('../src/stories/Pages/');
  // You can require as many stories as you need.
}

configure(loadStories, module);
