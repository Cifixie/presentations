import React, { Fragment } from "react";
import { List } from "../Components";
import styled from "styled-components";

const Left = styled.div`
  float: left;
  width: 50%;
`;

const Right = styled.div`
  float: right;
  width: 50%;
`;
export default () => (
  <Fragment>
    <h1>On global scope</h1>
    <Left>
      <List>
        <li>HRX (Ajax)</li>
        <li>EventListener Breakpoints</li>
        <li>Debugging Web Workers / serviceWorkers</li>
        <li>Profile</li>
        <li>Code Coverage</li>
      </List>
    </Left>
    <Right>
      <List>
        <li>Performance (Timelines)</li>
        <li>Network</li>
        <li>Elements</li>
        <li>Extenssions</li>
      </List>
    </Right>
  </Fragment>
);
