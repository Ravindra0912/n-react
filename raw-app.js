import React from 'react';
import  ReactDOM from 'react-dom/client';

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"this is n React"),
        React.createElement("h2",{},"I am h2 tag"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag"),
    ]),
])


const root = ReactDOM.createRoot(document.getElementById("root"));
// parent is a JS Object, render converts it into HTML and shows it on browser
root.render(parent);