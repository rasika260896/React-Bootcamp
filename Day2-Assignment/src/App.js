/* importing react as we removed CDN links from index.html */
import React from 'react'
import ReactDOM from 'react-dom/client'

const head = React.createElement("h1",{},"Hello world....");
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(head);