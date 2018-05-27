import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {PropTypes} from 'prop-types';


export default class Example extends React.Component {
    render() {
        return (
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
                    <Col sm="4">.col .col-sm-4</Col>
                </Row>
                <Row>
                    <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>.col .col-sm-6 .col-sm-push-2 .col-sm-pull-2 .col-sm-offset-2</Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>.col .col-sm-12 .col-md-6 .col-md-offset-3</Col>
                </Row>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
                    <Col sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
                </Row>
            </Container>
        );
    }
}

Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}

Row.propTypes = {
  noGutters: PropTypes.bool
}

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    // example size values:
    // 12 || "12" => col-12 or col-`width`-12
    // auto => col-auto or col-`width`-auto
    // true => col or col-`width`
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  // override the predefined width (the ones above) with your own custom widths.
  // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
  widths: PropTypes.array,
}
