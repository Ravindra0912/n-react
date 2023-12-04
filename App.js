import React from "react";
import ReactDOM from "react-dom/client";

// const Title = () =>(
//   <h1 className="head" tabIndex="5">
//     Namaste React Using jsx
//   </h1>
// );
const elem = <span>React Element</span>

const title = (
    <h1 className="head" tabIndex="5">
      {elem}
      Namaste React Using jsx !!!
    </h1>
  );

// React functional Component ->  JS function which return JSX or React ELement is called Functinal component

const HeadingComponent = () => {
  return (
    <div id="container">
      {title}
      <h1 className="heading ">N React Functional Component</h1>
    </div>
  );
};

root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
