import React from "react";
import ReactDOM from "react-dom";
// import "./css/index.css";
import App from "./App";
import store from './store'
import { Provider } from "react-redux";
import { withRouter, Route, BrowserRouter, Switch } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
