
import React from 'react' ;

import PropTypes from "prop-types";
import Company from 'components/Stock/Company';
import Page from 'components/Page';

//import ResponsiveContainer from "react-responsive-widget";
//import { Grid, Row, Col } from 'react-bootstrap';

import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  //CardLink,
  //Container,
  Row,
  Col,
  Button,
} from 'reactstrap';

function CompanyList(props) {

  return (
    <Page title="Company Cards" breadcrumbs={[{ name: 'cards', active: true }]}>
      <Row>
        {props.company.map((company, index) => (

          <Col md={3} sm={6} xs={12} className="mb-3"  key={company.symbol} >

            <Card
              inverse
              className={`border-0 bg-gradient-theme`}
              >
              <CardBody className="d-flex flex-column justify-content-start align-items-start">
                <CardTitle>{company.symbol} - {company.companyName} </CardTitle>
                <CardText>{company.description}</CardText>
              </CardBody>

              <CardBody className="d-flex justify-content-between align-items-center">
                <CardText>{company.ceo}</CardText>
                <Button outline color="light">
                  Click
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Page>

 
  ); 
} 

CompanyList.propTypes = {
  company :  PropTypes.arrayOf(Company)
};

CompanyList.defaultProps = {
  company: []
};

export default CompanyList;
