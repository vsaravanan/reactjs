import React from 'react';
import ReactDOM from 'react-dom';
import store from 'reducers/store.js';
//import { updateStockId } from 'reducers/actions/state-actions';
import './styles/reduction.css';


import App from './App';

console.log("initial state: ", store.getState());
//store.dispatch(updateStockId('orcl'));
ReactDOM.render(<App />, document.getElementById('root'));

// import CompanyData from 'components/Stock/CompanyData';
// ReactDOM.render(<CompanyData />, document.getElementById('root'));

