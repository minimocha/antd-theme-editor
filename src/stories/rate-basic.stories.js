
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.rate', module);
  import { Rate } from 'antd';

stories.addWithJSX('basic', () => (
    <Rate />
  ))