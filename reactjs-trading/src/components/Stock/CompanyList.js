
import React from 'react' ;

import PropTypes from "prop-types";
import Company from 'components/Stock/Company';


function CompanyList(props) {

  return (
    <div>
      {props.company.map(c => <Company key={c.symbol} company={c} />)}
     </div> 
  ); 
} 

CompanyList.propTypes = {
  company :  PropTypes.arrayOf(Company)
};

CompanyList.defaultProps = {
  company: []
};

export default CompanyList;
