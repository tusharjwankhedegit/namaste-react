import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {id: "fh1"}, "I'm first h1 in first  🚀"),
        React.createElement("h2", {id: "fh2"}, "I'm second h1 in first"),
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {id: "sh1"}, "I'm first h1 in second"),
        React.createElement("h2", {id: "sh2"}, "I'm second h1 in second"),
    ])
])
// const heading = React.createElement("h1", { id: 'heading' }, "Hello World using REACT");
// console.log(heading);
 const reactRoot = createRoot(document.getElementById("root"))
reactRoot.render(parent)

