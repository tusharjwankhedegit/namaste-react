import React from 'react'
import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import Header from './Header';
import Body from './Body';

function AppLayout() {
  return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
  )
}

const reactRoot = createRoot(document.getElementById("root"))
reactRoot.render(<AppLayout/>)

export default AppLayout