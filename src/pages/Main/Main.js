// LIBRARY AND MODULES
import React from "react";
import { ThemeProvider } from "styled-components";
import Moment from "moment";

// SERVICES
import Axios from "../../services/API";
import Storage from "../../services/storage";
import { Regexp } from "../../services/utilities";

// STYLES
import GlobalStyle from "../../styles/global";
import {
  HeaderContainerPage,
  ContainerPage,
  FooterContainerPage,
  FormElement
} from "./styles";

// COMPONENTS
import CompareList from "../../components/stateless/specifics/Cards/CompareList/CompareList";
import Input from "../../components/stateless/generics/Input/Input";
import Button from "../../components/stateless/generics/Button/Button";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repositoryKey: "repositories",
      repositoryCounter:
        this.repositoryData !== undefined ? this.repositoryData.length : 0,
      repositoryData: [],
      inputValue: "",
      buttonIsDisabled: true
    };

    this.splitValue = this.splitValue.bind(this);
    this.searchRepository = this.searchRepository.bind(this);
    this.addRepository = this.addRepository.bind(this);

    this.filterRepositoryData = this.filterRepositoryData.bind(this);
    this.updateRepository = this.updateRepository.bind(this);
    this.deleteRepository = this.deleteRepository.bind(this);
  }

  UNSAFE_componentWillMount() {
    const STORAGE_DATA = Storage.getLocalStorage(this.state.repositoryKey);

    if (STORAGE_DATA !== null) {
      this.setState({ repositoryData: [...STORAGE_DATA] });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.repositoryCounter <= 2;
  }

  splitValue(string) {
    const REGEXP = new RegExp("[\\/]");
    const REGEXP_CLASS = new Regexp();
    let splitValue = REGEXP_CLASS.splitStr(string, REGEXP);

    if (splitValue) {
      if (splitValue.length === 2) {
        return splitValue;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  searchRepository() {
    const INPUT_VALUE_SPLITED = this.splitValue(this.state.inputValue);

    if (INPUT_VALUE_SPLITED) {
      Axios.getRepository(INPUT_VALUE_SPLITED[0], INPUT_VALUE_SPLITED[1])
        .then(response => {
          this.addRepository(response.data);
        })
        .catch(error => {
          alert(
            "AN ERROR OCURRED WHILE RETURNING FROM THE API.. MAYBE THE DIGITAL NAME IS INCORRECT."
          );
          console.error(error);
        });
    } else {
      alert(
        "PROPERLY ENTER THE USER NAME AND REPOSITORY .. AS FOR EXAMPLE: FACEBOOK/REACT OR VUEJS/VUE"
      );
    }
  }

  addRepository(apiResponse) {
    const STORAGE_DATA = Storage.getLocalStorage(this.state.repositoryKey);
    apiResponse.updated_at = Moment(apiResponse.updated_at).fromNow();

    if (STORAGE_DATA !== null) {
      Storage.setLocalStorage(this.state.repositoryKey, [
        apiResponse,
        ...STORAGE_DATA
      ]);
      this.setState({ repositoryData: [apiResponse, ...STORAGE_DATA] });
    } else {
      Storage.setLocalStorage(this.state.repositoryKey, [apiResponse]);
      this.setState({ repositoryData: [apiResponse] });
    }

    this.setState({
      repositoryCounter: this.state.repositoryCounter + 1,
      inputValue: "",
      buttonIsDisabled: true
    });
  }

  filterRepositoryData(repositoryId, typeComparation) {
    let newObjectRepository = { index: 0, data: null };

    this.state.repositoryData.forEach((repository, index) => {
      if (typeComparation === "equality") {
        if (repository.id === repositoryId) {
          newObjectRepository.index = index;
          newObjectRepository.data = repository;
        }
      } else if (typeComparation === "diferrence") {
        if (repository.id !== repositoryId) {
          newObjectRepository.index = index;
          newObjectRepository.data = repository;
        }
      } else {
        console.warn("THIS VALUE DOES NOT EXIST FOR THIS TYPE OF ATTRIBUTE!");
      }
    });

    return newObjectRepository;
  }

  updateRepository(id) {
    const NEW_ARR_REPOSITORY = this.filterRepositoryData(id, "equality");
    const { index, data } = NEW_ARR_REPOSITORY;
    const FULL_NAME_SPLITED = this.splitValue(data.full_name);

    if (FULL_NAME_SPLITED) {
      Axios.getRepository(FULL_NAME_SPLITED[0], FULL_NAME_SPLITED[1])
        .then(response => {
          const STORAGE_DATA = Storage.getLocalStorage(
            this.state.repositoryKey
          );

          STORAGE_DATA[index] = response.data;
          Storage.setLocalStorage(this.state.repositoryKey, STORAGE_DATA);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  deleteRepository(id) {
    if (this.state.repositoryCounter < 2) {
      this.setState({ repositoryData: [] });
      Storage.setLocalStorage(this.state.repositoryKey, []);
    } else {
      const NEW_ARR_REPOSITORY = this.filterRepositoryData(id, "diferrence");
      const { data } = NEW_ARR_REPOSITORY;

      this.setState({ repositoryData: [data] });
      Storage.setLocalStorage(this.state.repositoryKey, [data]);
    }

    this.setState({ repositoryCounter: this.state.repositoryCounter - 1 });
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <HeaderContainerPage>
          <h3> {this.state.repositoryCounter} of 2 repositories</h3>
        </HeaderContainerPage>
        <ContainerPage>
          {this.state.repositoryData.map(repository => (
            <CompareList
              key={repository.id}
              data={repository}
              updateRepository={this.updateRepository}
              deleteRepository={this.deleteRepository}
            />
          ))}
        </ContainerPage>

        <FooterContainerPage>
          <FormElement>
            <Input
              type="text"
              placeholder="Type the username/repository"
              value={this.state.inputValue}
              onChange={e => this.setState({ inputValue: e.target.value })}
              onKeyUp={e =>
                e.target.value === ""
                  ? this.setState({ buttonIsDisabled: true })
                  : this.setState({ buttonIsDisabled: false })
              }
              onKeyDown={e => (e.keyCode === 32 ? e.preventDefault() : null)}
              autoComplete="on"
              autoFocus={true}
              disabled={this.state.repositoryCounter === 2 ? true : false}
              required={true}
            />

            <ThemeProvider theme={{ name: "themeA" }}>
              <Button
                type="button"
                onClick={
                  this.state.repositoryCounter === 2
                    ? alert(
                        `NOW YOU HAVE REACHED THE LIMIT OF REPOSITORIES.TO 
                         ADD MORE, REMOVE AT LEAST ONE.`
                      )
                    : this.searchRepository
                }
                disabled={this.state.buttonIsDisabled}
                required={true}
              >
                SEARCH
              </Button>
            </ThemeProvider>
          </FormElement>
        </FooterContainerPage>
      </React.Fragment>
    );
  }
}
