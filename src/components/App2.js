import React from "react";
import { createRoot } from 'react-dom/client';

//REACT element
const heading = React.createElement("h1", {id: "heading"}, "Namaste REACT");
const jsxHeading = <h1>Namaste react using jsx</h1>;
const root = createRoot(document.getElementById("root"));
root.render(heading);