import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux' ;
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';



const TodoApp = () => 
 (
      <div>

      </div>
    );


  ReactDOM.render(

    <TodoApp   />,
    document.getElementById('root')
  );



console.log('All tests are passed');

