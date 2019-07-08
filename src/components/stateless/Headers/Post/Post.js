import React from "react";
import PropTypes from "prop-types";

// IMPORTING STYLES
import "./Post.scss";

const HeaderPost = ({ personAvatar, personName, postDate }) => (
  <div className="container-flex-header__post">
    <header>
      <img src={personAvatar} alt={personName + "Avatar"} />
    </header>
    <section>
      <h3>{personName}</h3>
      <span>{postDate}</span>
    </section>
  </div>
);

HeaderPost.propTypes = {
  personAvatar: PropTypes.string.isRequired,
  personName: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired
};

export default HeaderPost;
