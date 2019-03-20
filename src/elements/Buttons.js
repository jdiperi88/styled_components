import styled from "styled-components";
import { fixed } from "../utilties";
import { teal, Elevation } from "../utilties";
import { lighten } from "polished";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
  font-size:1rem;
  padding: 3px 10px;`,
  cancel: () => `
  background: red;
  `
};

const color = "indigo";
export const Button = styled.button`
  background: ${props => props.theme.colors.secondary};
  padding: 5px 10px;
  border-radius: 4px;
  color: white;
  font-size: 2rem;
  border: none;
  ${Elevation[1]};
  &:hover {
    ${Elevation[2]}
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

// export const CancelButton = styled(Button)`
//   background: purple;
//   ${fixed}
// `;
