import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";

render(<App />, document.body.appendChild(document.createElement("div")));
