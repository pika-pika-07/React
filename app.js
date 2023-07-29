import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root")); // Creating a Root for React

// const heading = React.createElement(
//   "h4",
//   { id: "heading" }, // Attributes to h4 React Element
//   "Hello World from React" // Content of h4 React Element
// );

// const heading1 = React.createElement("h1", {}, "Yo"); // This is a react element which is an object
// const heading2 = React.createElement("h2", {}, "Parth1234");

// const children = React.createElement("div", { id: "child" }, [
//   heading,
//   heading1,
//   heading2,
// ]); // Passing it like array will have the elements as multiple children of parent at same level

//const parent = React.createElement("div", { id: "parent" }, children);

// JSX -> Its not html in JS. Its and HTML like syntax
// JSX => Babel Transpiles to React.createElement => ReactElement - JS Object => HTML Element(render)
// React Element
const jsxHeading = (
  <h1 id="heading" className="headingClass">
    React Element
  </h1>
); // Its a React Element. It is similar to heading1. Just another way of creating React Element
// jsxHeading === heading1

// React Component
// Class based components
// functional components

// React Functional Component -> Its a function that returns a JSX code
const HeadingComponent1 = () => {
  return <h1> Heading </h1>;
};

const HeadingComponent = () => {
  // Component Composition
  return (
    <div>
      <HeadingComponent1 />
      {HeadingComponent1()}
      {jsxHeading}
      <h2> React Component</h2>
    </div>
  );
};

//root.render(parent); // Rendering the element to DOm creates Reacxt Element to HTMl element
//root.render(jsxHeading);
root.render(<HeadingComponent />);
