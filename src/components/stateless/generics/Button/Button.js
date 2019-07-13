// LIBRARY AND MODULES
import React from "react";
import PropTypes from "prop-types";

// STYLES
import { ButtonElement } from "./styles";

const Button = props => (
  <ButtonElement
    type={props.type}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.children}
  </ButtonElement>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,

  checkElementType: (props, funcName, componentName) => {
    const regExpTypes = new RegExp("^(submit|reset|button)$");

    if (!regExpTypes.test(props.type)) {
      return new Error(
        `
         Validation failed in "${componentName}" component,
         Motive: Invalid prop type "${props.type}".
        `
      );
    }
  }
};

export default Button;
