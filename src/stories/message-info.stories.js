
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('message', module);
  import { message, Button } from 'antd';

const info = () => {
  message.info('This is a normal message');
};

stories.add('info', () => (
    
  <Button type="primary" onClick={info}>Display normal message</Button>

  ))