import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root")); // Creating a Root for React

const heading = React.createElement(
  "h4",
  { id: "heading" }, // Attributes to h4 React Element
  "Hello World from React" // Content of h4 React Element
);

const heading1 = React.createElement("h1", {}, "Yo"); // This is a react element which is an object
const heading2 = React.createElement("h2", {}, "Parth1234");

const children = React.createElement("div", { id: "child" }, [
  heading,
  heading1,
  heading2,
]); // Passing it like array will have the elements as multiple children of parent at same level

const parent = React.createElement("div", { id: "parent" }, children);

root.render(parent); // Rendering the element to DOm creates Reacxt Element to HTMl element
