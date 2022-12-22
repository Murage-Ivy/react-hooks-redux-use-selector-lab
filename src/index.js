import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";

import usersReducer from "./features/users/usersSlice";

// add imports and code
const store = createStore(usersReducer)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // add imports and code

  // add imports and code
  document.getElementById("root")
);
