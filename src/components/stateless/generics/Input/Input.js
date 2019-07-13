// LIBRARY AND MODULES
import React from "react";
import PropTypes from "prop-types";

// STYLES
import { InputElement } from "./styles";

const Input = props => (
  <InputElement
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    onKeyUp={props.onKeyUp}
    onKeyDown={props.onKeyDown}
    autoComplete={props.autoComplete}
    autoFocus={props.autoFocus}
    disabled={props.disabled}
    required={props.required}
  />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func,
  autoComplete: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  required: PropTypes.bool.isRequired,

  checkElementType: (props, funcName, componentName) => {
    const regExpTypes = new RegExp(
      "^(button|color|date|datetime-local|email|file|hidden|image|month|password|radio|range|reset|search|submit|tel|text|time|url|week)$"
    );

    if (!regExpTypes.test(props.type)) {
      return new Error(
        `
         Validation failed in "${componentName}" component,
         Motive: Invalid prop type "${props.type}".
        `
      );
    }
  },

  checkAutocompleteValue: (props, funcName, componentName) => {
    const regExpTypes = new RegExp("on$|off$");

    if (!regExpTypes.test(props.autoComplete)) {
      return new Error(
        `
         Validation failed in "${componentName}" component,
         Motive: Invalid autoComplete value "${props.autoComplete}".
        `
      );
    }
  }
};

export default Input;
