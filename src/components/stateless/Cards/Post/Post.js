// IMPORTING MODULES
import React from "react";
import PropTypes from "prop-types";

// IMPORTING COMPONENTS
import HeaderPost from "../../Headers/Post/Post";

// IMPORTING STYLES
import "./Post.scss";

const CardPost = ({ data }) => (
  <div id={"card__post-" + data.id} className="container-card__post">
    <header>
      <HeaderPost
        personAvatar={data.personAvatar}
        personName={data.personName}
        postDate={data.postDate}
      />
    </header>
    <article>
      <span>{data.postText}</span>
    </article>
  </div>
);

CardPost.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    personAvatar: PropTypes.string.isRequired,
    personName: PropTypes.string.isRequired,
    postDate: PropTypes.string.isRequired,
    postText: PropTypes.string.isRequired
  }).isRequired
};

export default CardPost;
