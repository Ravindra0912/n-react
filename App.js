const heading = React.createElement("h1",{id:'heading'},"Hello world from react!"); // React element, JS object, ''h1 is element, next is props, and last is children
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);