
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('pagination', module);
  import { Pagination } from 'antd';

function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

stories.add('jump', () => (
    
  <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
  ))