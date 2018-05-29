import axios from "axios";
import React, { Component } from 'react' ;
import CompanyList from 'components/Stock/CompanyList';
import store from 'reducers/store.js';

//const CompanyData = ({stockId}) => {
class CompanyData extends Component {

  unsubscribe = store.subscribe(() =>
    console.log(store.getState())
  );

  // default State object
  state = {
    peers: [],
    company: [],
    stockId : this.props.stockId
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

  componentWillMount() {
      if (this.state.stockId !== null) {
        this.getAll(this.state.stockId);
      }
      let stockId = store.getState().states.stockId;
      if (stockId !== null) {
        this.getAll(stockId);
      }
  }

  componentWillUnmount() {
    this.unsubscribe();
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
