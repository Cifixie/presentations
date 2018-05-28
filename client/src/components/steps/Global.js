import React, { Component } from "react";
import { Button, Code, List } from "../Components";
import usersService from "../../services/users";

class Global extends Component {
  getUsers = async () => {
    (await usersService.getUsers()).forEach(user => console.table(user));
  };
  worker = () => {
    const a = new Worker("worker.js");
  };

  render() {
    return (
      <div>
        <h1>Global breakpoints</h1>
        <List>
          <li>HRX (Network)</li>
          <li>EventListener Breakpoints</li>
          <li>Breakpoints not on my code &amp; production</li>
          <li>Workers</li>
          <li>serviceWorkers</li>
        </List>
        <Button onClick={this.getUsers}>GetUsers</Button>
        <Button onClick={this.worker}>GetUsers</Button>
      </div>
    );
  }
}

export default Global;
