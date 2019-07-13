// LIBRARY AND MODULES
import styled from "styled-components";

// STYLES UTILITIES
import {
  mediaXS,
  mediaMD,
  mediaXL,
  mediaXXL
} from "../../styles/utilities/breakpoints";

export const HeaderContainerPage = styled.header`
  width: 100%;
  top: 0;
  position: fixed;
  padding: 0.9rem;
  text-align: center;
  background-color: #9b65e5;
  color: white;

  h3 {
    font-weight: lighter;
  }
`;

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  ${mediaXS`
    margin-top: 4rem;
    margin-bottom: 6.5rem;
  `}

  ${mediaMD`height: 75vh;`}
  ${mediaXXL`height: 87vh;`}
`;

export const FooterContainerPage = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: white;
`;

export const FormElement = styled.form`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  border: none;
  -webkit-box-shadow: 1px -7px 9px 5px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 1px -7px 9px 5px rgba(0, 0, 0, 0.05);
  box-shadow: 1px -7px 9px 5px rgba(0, 0, 0, 0.05);

  ${mediaXS`flex-direction: column;`}
  ${mediaXL`flex-direction: row-reverse;`}

  button {
    ${mediaXL`flex-shrink: 7;`}
  }
`;
