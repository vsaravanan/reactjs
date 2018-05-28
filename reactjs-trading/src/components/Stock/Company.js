import PropTypes from "prop-types";
import React from 'react' ;

function Company(props) {
  return (
    <div className="company">


      <div>{props.company.symbol}</div>
      <div>{props.company.companyName}</div>
      <div>{props.company.exchange}</div>
      <div>{props.company.industry}</div>
      <div>{props.company.website}</div>
      <div>{props.company.description}</div>
      <div>{props.company.ceo}</div>
      <div>{props.company.issueType}</div>
      <div>{props.company.sector}</div>

    </div>
  );
}


Company.propTypes = {
  company : 
    PropTypes.shape({
      symbol : PropTypes.string,
      companyName : PropTypes.string,
      exchange : PropTypes.string,
      industry : PropTypes.string,
      website : PropTypes.string,
      description : PropTypes.string,
      ceo : PropTypes.string,
      issueType : PropTypes.string,
      sector : PropTypes.string
    })
};

Company.defaultProps = {
  company: []
};

export default Company;