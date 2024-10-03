import React from "react";
import PropTypes from "prop-types";


const Video = ({ url, headline, subheadline}) => {
  return(
    <div>
      <iframe src="" frameBorder="0"></iframe>
      <h1>{headline}</h1>
      {subheadline && <p>{subheadline}</p>}
    </div>
  );
};

Video.propTypes = {
  url: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string,
};

export default Video;