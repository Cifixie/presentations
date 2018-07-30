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
    <h1>Neat tricks</h1>
    <Left>
      <List>
        <li>Expose to globals</li>
      </List>
    </Left>
    <Right>
      <List>
        <li />
      </List>
    </Right>
  </Fragment>
);
