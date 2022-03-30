import React, { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import "flowbite";

import "./index.css";

import { App } from "App";

import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// @ts-ignore
// const root = createRoot(document.getElementById("root"));

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
// npm i react@latest react-dom@latest
// npm i -D @types/react@latest @types/react-dom@latest

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
