import "babel-polyfill";
import React from "react";
import { render } from "react-dom";

import App from "./components/App";
import "./styles/styles.css"; //Webpack can import CSS files too!
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/toastr/build/toastr.min.css";

render(<App />, document.getElementById("app"));
