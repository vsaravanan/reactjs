
import React from 'react' ;
// import the Contact component
import Company from "./Company";


function CompanyList(props) {
  return (
    <div>
      {props.company.map(c => <Company key={c.symbol} company={c} />)}
     </div> 
  ); 
} 

export default CompanyList;