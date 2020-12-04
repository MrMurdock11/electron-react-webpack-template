import "./index.gstyle.css";
import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./pages/Home";

const root = document.createElement("div");
document.body.prepend(root);

ReactDOM.render(<Home />, root);
