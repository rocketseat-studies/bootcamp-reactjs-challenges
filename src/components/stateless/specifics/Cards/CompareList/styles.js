// LIBRARY AND MODULES
import styled from "styled-components";
import { mediaLG } from "../../../../../styles/utilities/breakpoints";

export const CardContainer = styled.div`
  width: 20rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  background-color: white;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.18);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.18);

  ${mediaLG`width: 17rem;`}
`;

export const CardHeader = styled.header`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  text-align: center;

  img {
    width: 4rem;
    margin-bottom: 0.5rem;
  }

  h5 {
    font-weight: lighter;
  }
`;

export const CardList = styled.ul`
  width: 100%;
  list-style: none;

  li {
    padding: 1rem;

    strong {
      margin-right: 0.5rem;
    }

    &:nth-child(2n - 1) {
      background-color: #f4f3f4;
    }

    &:nth-child(1) {
      svg {
        margin-left: 1.1rem;
      }

      strong {
        margin-left: 0.9rem;
      }
    }

    &:nth-child(2) {
      svg {
        margin-left: 1.4rem;
      }

      strong {
        margin-left: 1.1rem;
      }
    }

    &:nth-child(3),
    &:nth-child(4) {
      svg {
        margin-left: 1.2rem;
      }

      strong {
        margin-left: 1.2rem;
      }
    }
  }
`;

export const CardFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
