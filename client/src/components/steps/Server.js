import React, { Component } from "react";
import { Button, Code, List } from "../Components";
import usersService from "../../services/users";

class Server extends Component {
  getUsers = async () => {
    (await usersService.getUsers()).forEach(user => console.table(user));
  };
  render() {
    return (
      <div>
        <h1>Debugging on Server</h1>
        <List>
          <li>
            <a href="chrome://inspect" target="_blank">
              Node Inspector
            </a>
          </li>
          <li>
            <Code>--inspect</Code> Starts debugging
          </li>
          <li>
            <Code>--inspect-brk</Code> ^ + Pauses ASAP
          </li>
        </List>
        <Button onClick={this.getUsers}>Get Users</Button>
      </div>
    );
  }
}

export default Server;
