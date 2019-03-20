import styled from "styled-components";
import { Elevation } from "../utilties";
import { Button } from "./Buttons";

export const Card = styled.div`
  border-radius: 6px;
  padding: 10px;
  ${Elevation[2]};
`;

const CardButton = styled(Button)`
  width: 100%;
`;

Card.Button = CardButton;
