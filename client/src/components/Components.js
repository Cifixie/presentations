import styled from 'styled-components';
import { Step } from 'react-impressjs';

export const Button = styled.div`
  display:inline-block;
  border-radius: 3px;
  padding: 0 .5em;
  margin: .25em;
  border: 1px solid #006385;
  background-color: #008CBA;
  color:#eee;
  ${props => props.good && `
    border: 1px solid #3d8a3f;
    background-color: #4CAF50;
  `}
  ${props => props.bad && `
    border: 1px solid #e91b0c;
    background-color: #f44336;
  `}
`
export const Dia = styled(Step)`
  width: 100vw !important;
`