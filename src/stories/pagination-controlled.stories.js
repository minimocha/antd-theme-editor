
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.pagination', module);
  import { Pagination } from 'antd';

class App extends React.Component {
  state = {
    current: 3,
  }
  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  }
  render() {
    return <Pagination current={this.state.current} onChange={this.onChange} total={50} />;
  }
}

stories.addWithJSX('controlled', () => (
    <App />
  ))