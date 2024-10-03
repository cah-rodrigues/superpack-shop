import PropTypes from "prop-types";
import './Video.css';


const Video = ({ url, headline, subheadline}) => {
  return(
    <div className="video">
     
      <h1>{headline}</h1>
      {subheadline && <p>{subheadline}</p>}
      <iframe 
      width="500" 
      height="300" 
      src="https://www.youtube.com/embed/T5W3TJtYa2E" 
      title="Star Wars Space Battles Only - HD" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen>
      </iframe>
    </div>
  );
};

Video.propTypes = {
  url: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string,
};

export default Video;