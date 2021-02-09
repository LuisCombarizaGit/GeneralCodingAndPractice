import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <form action="">
        <div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <label htmlFor="">Comments</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>
    );
  }
}

export default Form;
