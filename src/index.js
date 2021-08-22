import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Editor from "./Editor";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Editor />
  </StrictMode>,
  rootElement
);
