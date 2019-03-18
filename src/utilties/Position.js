import { css } from "styled-components";

//CSS helper

export const fixed = ({ x = 0, y = 0 } = {}) => {
  return css`
    position: fixed;
    top: ${y};
    left: ${x};
  `;
};
