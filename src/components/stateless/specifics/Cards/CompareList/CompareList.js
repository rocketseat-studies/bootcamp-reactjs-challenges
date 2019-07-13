// LIBRARY AND MODULES
import React from "react";
import { ThemeProvider } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCodeBranch,
  faInfoCircle,
  faClock
} from "@fortawesome/free-solid-svg-icons";

// COMPONENTS
import Button from "../../../generics/Button/Button";

// STYLES
import { CardContainer, CardHeader, CardList, CardFooter } from "./styles";

const CompareList = ({ data, updateRepository, deleteRepository }) => (
  <CardContainer>
    <CardHeader>
      <img
        src={data.organization.avatar_url}
        alt={`${data.full_name} LogoType`}
      />
      <h1>{data.name}</h1>
      <h5>{data.owner.login}</h5>
    </CardHeader>
    <CardList>
      <li>
        <FontAwesomeIcon icon={faStar} pull="left" />
        <strong>{data.stargazers_count}</strong>
        <small>stars</small>
      </li>
      <li>
        <FontAwesomeIcon icon={faCodeBranch} pull="left" />
        <strong>{data.forks_count}</strong>
        <small>forks</small>
      </li>
      <li>
        <FontAwesomeIcon icon={faInfoCircle} pull="left" />
        <strong>{data.open_issues_count}</strong>
        <small>open issues</small>
      </li>
      <li>
        <FontAwesomeIcon icon={faClock} pull="left" />
        <strong>{data.updated_at}</strong>
        <small>updated</small>
      </li>
    </CardList>
    <CardFooter>
      <ThemeProvider theme={{ name: "themeB" }}>
        <Button
          type="button"
          onClick={() => {
            deleteRepository(data.id);
          }}
        >
          DELETE
        </Button>
      </ThemeProvider>
      <ThemeProvider theme={{ name: "themeC" }}>
        <Button
          type="button"
          onClick={() => {
            updateRepository(data.id);
          }}
        >
          UPDATE
        </Button>
      </ThemeProvider>
    </CardFooter>
  </CardContainer>
);

export default CompareList;
