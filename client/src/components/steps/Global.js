import React, { Component } from "react";
import { Button, Code, List } from "../Components";
import usersService from "../../services/users";

class Global extends Component {
  getUsers = async () => {
    const users = await usersService.getUsers();
    users.forEach(user => console.table(user));
  };

  render() {
    return (
      <div>
        <h1>On global scope</h1>
        <List>
          <li>HRX (Network)</li>
          <li>EventListener Breakpoints</li>
          <li>Debugging Web Workers / serviceWorkers</li>
          <li>Profile</li>
          <li>Coverage</li>
          <li>Performance (Timelines)</li>
        </List>
        <Button onClick={this.getUsers}>GetUsers</Button>
      </div>
    );
  }
}

export default Global;
