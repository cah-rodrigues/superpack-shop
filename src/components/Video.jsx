import React from "react";
import PropTypes from 'prop-types';
import '../styles/Video.css';

const Video = ({ url, headline, subheadline }) => {
  return (
      <div>
          <h1>{headline}</h1>
          <iframe 
              width="400" 
              height="300" 
              src={url}
              title="Vídeo Promocional"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
          ></iframe>
          <h2>{subheadline}</h2>
      </div>
  );
};

// Props requeridas
Video.propTypes = {
  url: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string
};

export default Video;