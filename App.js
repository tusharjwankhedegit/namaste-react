const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "I'm first h1 in first"),
        React.createElement("h2", {}, "I'm second h1 in first"),
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "I'm first h1 in second"),
        React.createElement("h2", {}, "I'm second h1 in second"),
    ])
])

// const heading = React.createElement("h1", { id: 'heading' }, "Hello World using REACT");
// console.log(heading);
const reactRoot = ReactDOM.createRoot(document.getElementById("root"))
reactRoot.render(parent)