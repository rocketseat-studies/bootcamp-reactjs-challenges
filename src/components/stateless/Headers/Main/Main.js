// IMPORTING MODULES
import React from "react";
import PropTypes from "prop-types";

// IMPORTING STYLES
import "./Main.scss";

const HeaderMain = _props => (
  <header id={_props.id} className="container-header__main">
    <h1>{_props.children}</h1>
  </header>
);

HeaderMain.defaultProps = {
  id: "Header-Main"
};

HeaderMain.propTypes = {
  children: PropTypes.string.isRequired
};

export default HeaderMain;
