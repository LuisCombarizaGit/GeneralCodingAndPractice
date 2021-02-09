import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Luis",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle A getDerivedFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA did mount");
  }

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>LifecycleA</div>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
