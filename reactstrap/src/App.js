import React from 'react';


import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Container,
  Row,
  Col,
  Input
} from 'reactstrap';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      dd1: false
    };
    this.dropdownToggle = this.dropdownToggle.bind(this);
  }
  
  dropdownToggle() {
    this.setState({
      dd1: !this.state.dd1
    });
  }
  
  render() {
    return (      
      <div>
        <h1>Demo</h1>
        Add your content here
        <hr/>
        <h3>Button</h3> 
        <p>
          <Button color="primary">primary</Button>
        </p>
        <hr/>
        <h3>Dropdown</h3> 
        <Dropdown className="m-b-1" isOpen={this.state.dd1} toggle={this.dropdownToggle}>
          <DropdownToggle color="danger">
            Default
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <hr />
        <h3>Grid</h3>
      
      <Container>
        <Row>
          <Col>.col</Col>
        </Row>
        <Row>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>
        <Row>
          <Col xs="3">.col-3</Col>
          <Col xs="auto">.col-auto - variable width content</Col>
          <Col xs="3">.col-3</Col>
        </Row>
        <Row>
          <Col xs="6">.col-6</Col>
          <Col xs="6">.col-6</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col sm="4">.col-sm-4</Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .col-sm-order-2 .col-sm-offset-2</Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>.col-sm-12 .col-md-6 .col-md-offset-3</Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm .col-sm-offset-1</Col>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm .col-sm-offset-1</Col>
        </Row>
      </Container>
      </div>
    );
  }
}

