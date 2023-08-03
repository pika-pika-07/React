import React from "react";
import ReactDOM from "react-dom/client";
import { SampleData } from "./utils/sampleData.js";
import Header from "./components/Header";
import Body from "./components/Body";
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restraunt Container
 *      - RestrauntCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root")); // Creating a Root for React

root.render(<AppLayout />);
