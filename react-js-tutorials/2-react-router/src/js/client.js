import React from "react";
import ReactDOM from "react-dom";
import Bootstrap from "bootstrap-without-jquery"

import {Router, Route, IndexRoute, hashHistory}  from "react-router";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Settings from "./pages/Settings";
import Layout from "./pages/Layout";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout} >
      <IndexRoute component={Featured} > </IndexRoute>
      <Route path="archives(/:article)" name="archives" component={Archives}></Route>
      <Route path="settings" name="settings" component={Settings}> </Route>
    </Route>
  </Router>

  , app);

// import { Router, Route, IndexRoute, hashHistory } from "react-router";

// import Archives from "./pages/Archives";
// import Featured from "./pages/Featured";

// import Settings from "./pages/Settings";



// ReactDOM.render(
//   <Router history={hashHistory}>
//     <Route path="/" component={Layout}>
//       <IndexRoute component={Featured}></IndexRoute>
//       <Route path="archives(/:article)" name="archives" component={Archives}></Route>
//       <Route path="settings" name="settings" component={Settings}></Route>
//     </Route>
//   </Router>,
// app);
