import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Luis",
    };
    console.log("LifecycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB did mount");
  }

  render() {
    console.log("LifecycleB render");
    return <div>Lifecycle A</div>;
  }
}

export default LifecycleB;
