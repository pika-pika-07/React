import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h4",
  { id: "heading" },
  "Hello World from React"
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
console.log(root);
//root.render(heading);

const heading1 = React.createElement("h1", {}, "Yo");
const heading2 = React.createElement("h2", {}, "Parth1234");

const children = React.createElement("div", { id: "child" }, [
  heading1,
  heading2,
]); // Passing it like array will have the elements as multiple children of parent at same level

const parent = React.createElement("div", { id: "parent" }, children);
//console.log(parent);
root.render(parent);
