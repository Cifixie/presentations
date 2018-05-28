import React, { Component } from "react";
import { Button, Code, List } from "../Components";
import usersService from "../../services/users";

class Breakpoints extends Component {
  getUsers = async () => {
    const users = await usersService.getUsers();
    debugger;
    users.forEach(u => {
      debugger;
      console.log(`user's ${u.name.firstName} age is ${u.age}`);
    });
  };

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
        </List>
        <Button onClick={this.getUsers}>Get Users</Button>
      </div>
    );
  }
}

export default Breakpoints;
