import React from 'react';
import { Layout, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class TestPage extends React.Component{

  render(){
    return(
      <Layout>
        <Header>Header</Header>
        <Breadcrumb>
          <Content>text text text text</Content>
        </Breadcrumb>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}

export default TestPage;