import "./custom.scss";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store, history } from "./store";

import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import {ThemeProvider} from "styled-components"
import theme from "./styles/theme"

import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,

  document.getElementById("root")
);
