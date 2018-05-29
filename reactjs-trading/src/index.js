import React from 'react';
import ReactDOM from 'react-dom';
import store from 'reducers/store.js';
import './styles/reduction.css';


import App from './App';
import { Provider } from "react-redux";

console.log("initial state: ", store.getState());
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'));

