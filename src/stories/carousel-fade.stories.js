
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('carousel', module);
  import { Carousel } from 'antd';

stories.add('fade', () => (
    
  <Carousel effect="fade">
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>

  ))