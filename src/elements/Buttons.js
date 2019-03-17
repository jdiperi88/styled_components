import styled from "styled-components";
import { fixedTop } from "../utilties";
const color = "indigo";
export const Button = styled.button`
  background: ${color};
  padding: 5px 10px;
  border-radius: 4px;
  color: white;
  font-size: 2rem;
  border: none;
  background: tomato;
`;

export const CancelButton = styled(Button)`
  background: purple;
  ${fixedTop}
`;
