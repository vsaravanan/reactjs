import axios from "axios";
import React, { Component } from 'react' ;
import CompanyList from 'CompanyList';

class Rest extends Component {

  // default State object
  state = {
    company: []
  };

  componentDidMount() {
    axios
      .get("https://api.iextrading.com/1.0/stock/aapl/company")
      .then(response => {
        const Store = [].concat(response.data) ;



        //console.log(Store);
        //const newCompanies = Store.map(c => c);

        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          company: Store
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <CompanyList company={this.state.company} />
      </div>
    );
  }
}

export default Rest;