import axios from "axios";
import React, { Component } from 'react' ;
import CompanyList from 'components/Stock/CompanyList';


class CompanyData extends Component {

  // default State object
  state = {
    peers: [],
    company: []
  };


  getPeers = (stockId) => {
    return (
      axios
        .get(`https://api.iextrading.com/1.0/stock/${stockId}/peers`)
        .then(response => {

          const Peers = [].concat(response.data) ;

  
          //console.log('Peers : ' + Peers);
          const newPeers = Object.assign({}, this.state, {
            peers: Peers
          });
  
          this.setState(newPeers);
        })
        .catch(error => console.log(error))
    );
  }
  
  getCompany = (stockId) => {
    return (
      axios
        .get(`https://api.iextrading.com/1.0/stock/${stockId}/company`)
        .then(response => {

          const Company = response.data ;
  
          const companyConcated = [ ...this.state.company, Company];
          
          const companyArr = Object.assign({}, this.state, {
            company: companyConcated
          });



          this.setState(  companyArr);

        })
        .catch(error => console.log(error))
    );
  }
  
  getAll = async (stockId) => {
    try {
      await this.getPeers(stockId);

      await this.getCompany(stockId);

      this.state.peers.filter(peers => peers !== stockId).map( (peers) =>
        {
            return this.getCompany(peers);
        })

      
    }
    catch (e) {
      console.error(e); 
    }
  }

  componentDidMount() {
    this.getAll('aapl');
  }

  render() {
    return (
      <div className="App">
        <CompanyList company={this.state.company} />
      </div>
    );
  }
}

export default CompanyData;
