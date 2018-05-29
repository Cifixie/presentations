import styled from "styled-components";
import { Step } from "react-impressjs";

export const Button = styled.div`
  display: inline-block;
  border-radius: 3px;
  padding: 0 0.5em;
  margin: 0.25em;
  border: 1px solid #006385;
  background-color: #008cba;
  color: #eee;
  ${props =>
    props.good &&
    `
    border: 1px solid #3d8a3f;
    background-color: #4CAF50;
  `} ${props =>
    props.bad &&
    `
    border: 1px solid #e91b0c;
    background-color: #f44336;
  `};
`;
export const Dia = styled(Step)`
  width: 100vw !important;
  * {
    text-shadow: 1px 1px 2px #fff;
  }
`;

export const List = styled.ul`
  list-style: circle;
  margin-left: 1em;
`;

export const Code = styled.code`
  color: #f44336;
`;
