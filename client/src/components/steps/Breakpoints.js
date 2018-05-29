import React, { Component } from "react";
import { Button, Code, List } from "../Components";
import usersService from "../../services/users";

class Breakpoints extends Component {
  getUsers = async () => {
    const users = await usersService.getUsers();
    users.forEach(this.logUsers);
  };
  logUsers = u => console.log(`user's ${u.name.firstName} age is ${u.age}`);

  render() {
    return (
      <div>
        <h1>Breakpoints</h1>
        <List>
          <li>Supercharged, more elegant way</li>
          <li>No need for code changes</li>
          <li>
            <strong>Next level:</strong> Expressions (Conditioning & Watches)
          </li>
        </List>
        <Button onClick={this.getUsers}>Get Users</Button>
      </div>
    );
  }
}

export default Breakpoints;
