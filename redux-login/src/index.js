import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import loginReducer from "./reducers/login-reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(loginReducer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
