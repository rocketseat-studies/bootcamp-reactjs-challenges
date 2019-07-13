// LIBRARY AND MODULES
import styled from "styled-components";

const themes = {
  themeA: {
    paddings: {
      top: "1rem",
      right: "1rem",
      left: "1rem",
      bottom: "1rem"
    },
    aligns: {
      txtAlign: "center"
    },
    styles: {
      fontWeight: "bold",
      border: "none"
    },
    colors: {
      bgColor: "#73c894",
      txtColor: "#ffffff",
      hoverBgColor: "#218838",
      disabledBgColor: "#dee2e7",
      disabledTxtColor: "black"
    }
  },
  themeB: {
    paddings: {
      top: "1rem",
      right: "1rem",
      left: "1rem",
      bottom: "1rem"
    },
    aligns: {
      txtAlign: "center"
    },
    styles: {
      fontWeight: "bold",
      border: "none"
    },
    colors: {
      bgColor: "#DC3545",
      txtColor: "#ffffff",
      hoverBgColor: "#C82333",
      disabledBgColor: "#dee2e7",
      disabledTxtColor: "black"
    }
  },
  themeC: {
    paddings: {
      top: "1rem",
      right: "1rem",
      left: "1rem",
      bottom: "1rem"
    },
    aligns: {
      txtAlign: "center"
    },
    styles: {
      fontWeight: "bold",
      border: "none"
    },
    colors: {
      bgColor: "#73c894",
      txtColor: "#ffffff",
      hoverBgColor: "#218838",
      disabledBgColor: "#dee2e7",
      disabledTxtColor: "black"
    }
  }
};

export const ButtonElement = styled.button`
  width: 100%;
  padding-top: ${props => themes[props.theme.name].paddings.top};
  padding-right: ${props => themes[props.theme.name].paddings.right};
  padding-left: ${props => themes[props.theme.name].paddings.left};
  padding-bottom: ${props => themes[props.theme.name].paddings.bottom};
  font-weight: ${props => themes[props.theme.name].aligns.fontWeight};
  background-color: ${props => themes[props.theme.name].colors.bgColor};
  color: ${props => themes[props.theme.name].colors.txtColor};
  border: ${props => themes[props.theme.name].styles.border};
  text-align: ${props => themes[props.theme.name].aligns.txtAlign};

  &:hover {
    background-color: ${props => themes[props.theme.name].colors.hoverBgColor};
  }

  &:disabled {
    background-color: ${props =>
      themes[props.theme.name].colors.disabledBgColor};
    color: ${props => themes[props.theme.name].colors.disabledTxtColor};
  }
`;
