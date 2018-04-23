import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.collapse", module);
import { Collapse } from "antd";
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

stories.addWithJSX("noarrow", () => (
  <Collapse defaultActiveKey={["1"]} onChange={callback}>
    <Panel header="This is panel header with arrow icon" key="1">
      <p>{text}</p>
    </Panel>
    <Panel
      showArrow={false}
      header="This is panel header with no arrow icon"
      key="2"
    >
      <p>{text}</p>
    </Panel>
  </Collapse>
));
