// ES6 module dependency import : creates a new variable called REACT with the contents of the react module
import React from "react"; //module name installed by npm
import ReactDOM from "react-dom";

function HelloWorld() {
  return (
    <div>
      {" "}
      <Hello />
      <World />!
    </div>
  );
}

function Hello() {
  return <span>Hello</span>;
}

function World() {
  return <span>World</span>;
}

ReactDOM.render(<HelloWorld />, document.querySelector("#root"));
