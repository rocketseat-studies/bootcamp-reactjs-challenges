import { css } from "styled-components";

// xs
export const mediaXS = (...args) => {
  return css`
    @media only screen and (min-width: 0px) {
      ${css(...args)}
    }
  `;
};

// sm
export const mediaSM = (...args) => {
  return css`
    @media only screen and (min-width: 576px) {
      ${css(...args)}
    }
  `;
};

// md
export const mediaMD = (...args) => {
  return css`
    @media only screen and (min-width: 768px) {
      ${css(...args)}
    }
  `;
};

// lg
export const mediaLG = (...args) => {
  return css`
    @media only screen and (min-width: 992px) {
      ${css(...args)}
    }
  `;
};

// xl
export const mediaXL = (...args) => {
  return css`
    @media only screen and (min-width: 1200px) {
      ${css(...args)}
    }
  `;
};

// xxl
export const mediaXXL = (...args) => {
  return css`
    @media only screen and (min-width: 1800px) {
      ${css(...args)}
    }
  `;
};
