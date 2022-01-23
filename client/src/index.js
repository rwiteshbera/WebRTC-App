import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";
import { ContextProvider } from "./SocketContext";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
