
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.carousel', module);
  import { Carousel } from 'antd';

function onChange(a, b, c) {
  console.log(a, b, c);
}

stories.addWithJSX('basic', () => (
    
  <Carousel afterChange={onChange}>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>

  ))