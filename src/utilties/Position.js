import { css } from "styled-components";

//CSS helper
export const fixedTop = css`
  position: fixed;
  top: ${({ top }) => top + "px"};
  left: 0;
`;
