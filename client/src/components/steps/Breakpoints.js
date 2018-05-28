import React, { Component } from "react";
import { Button, Code, List } from "../Components";
import usersService from "../../services/users";

class Breakpoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fix: false
    };
  }
  getUsers = async () => {
    const users = await usersService.getUsers();
    debugger;
    users.forEach(u => {
      debugger;
      if (!this.state.fix && u.name) {
        console.log(`user's ${u.name.firstName} age is ${u.age}`);
      }
    });
  };
  toggleState = key => () =>
    this.setState({
      [key]: !this.state[key]
    });

  render() {
    return (
      <div>
        <h1>Debugger (keyword)</h1>
        <p>
          <Code>Debugger</Code>: static breakpoint within code
        </p>
        <List>
          <li>Easy way of setting breakpoints where needed</li>
          <li>A Hammer, one of my go-to-tools</li>
          <li>Allows us to eval code paused</li>
        </List>
        <Button onClick={this.getUsers}>Get Users</Button>
        <Button onClick={this.toggleState("fix")}>
          Fix ({this.state.fix ? "on" : "off"})
        </Button>
      </div>
    );
  }
}

export default Breakpoints;
