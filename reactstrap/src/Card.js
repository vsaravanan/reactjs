import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button, Row, Col, CardHeader, CardFooter, CardColumns  } from 'reactstrap';

const Example = (props) => {
    return (
      <CardColumns>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </Card>
        <Card body inverse color="primary">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="secondary">Button</Button>
        </Card>
        <Card body color="primary">
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button color="secondary">Button</Button>
        </Card>
        <Card body outline color="primary">
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button color="secondary">Button</Button>
        </Card>
        <Card body inverse color="success">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="secondary">Button</Button>
        </Card>
        <Card body inverse color="info">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="secondary">Button</Button>
        </Card>
        <Card body inverse color="warning">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="secondary">Button</Button>
        </Card>
        <Card body inverse color="danger">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="secondary">Button</Button>
        </Card>
      </CardColumns>
    );
  };
  
  export default Example;