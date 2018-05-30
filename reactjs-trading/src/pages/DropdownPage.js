import Page from 'components/Page';
import React from 'react';
import {
  //Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  //Table,
  //Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledButtonDropdown,
} from 'reactstrap';
import CompanyChart from '../components/Stock/CompanyChart';
//import { getThemeColors } from 'utils/colors';

//const colors = getThemeColors();

const DropdownPage = () => {


  return (
    <Page title="Stock Chart" breadcrumbs={[{ name: 'stockchart', active: true }]}>
      <Row>
        <Col md={6}>
          <Card>
            <CardHeader>StockChart</CardHeader>
            <CardBody>
            <UncontrolledButtonDropdown>
                  <DropdownToggle
                    caret
                    color="primary"
                    className="text-capitalize m-1">
                    1m
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>1m</DropdownItem>
                    <DropdownItem>3m</DropdownItem>
                    <DropdownItem>6m</DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <CompanyChart />
        </Col>        
      </Row>

    </Page>
  );
};

export default DropdownPage;
