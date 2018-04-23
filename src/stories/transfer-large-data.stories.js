import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.transfer", module);
import { Transfer } from "antd";

class App extends React.Component {
  state = {
    mockData: [],
    targetKeys: []
  };
  componentDidMount() {
    this.getMock();
  }
  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 2000; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };
  handleChange = (targetKeys, direction, moveKeys) => {
    console.log(targetKeys, direction, moveKeys);
    this.setState({ targetKeys });
  };
  render() {
    return (
      <Transfer
        dataSource={this.state.mockData}
        targetKeys={this.state.targetKeys}
        onChange={this.handleChange}
        render={item => item.title}
      />
    );
  }
}

stories.addWithJSX("large-data", () => <App />);
