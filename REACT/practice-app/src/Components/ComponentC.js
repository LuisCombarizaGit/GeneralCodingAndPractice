import React, { Component } from "react";
import ComponentE from "./ComponentE";

class ComponentC extends Component {
  render() {
    return (
      <div>
        <ComponentE />
        <h2>Hello</h2>
      </div>
    );
  }
}

export default ComponentC;
