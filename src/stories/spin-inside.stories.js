
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.spin', module);
  import { Spin } from 'antd';

stories.addWithJSX('inside', () => (
    
  <div className="example">
    <Spin />
  </div>

  ))