import React from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.styles';

const Avatar = ({ src, rounded, circle }) => {
  let style = styles.root;

  if (rounded) {
    style = { ...style, ...styles.rounded };
  } else if (circle) {
    style = { ...style, ...styles.circle };
  }

  return (
    <img src={src} alt="Avatar" style={style} />
  )
};

Avatar.propTypes = {
  /**
   * Full URL to the image you want to use for the Avatar img.
   */
  src: PropTypes.string.isRequired,

  /**
   * Make the corners slightly rounded
   */
  rounded: PropTypes.bool,

  /**
   * Make the avatar a circle
   */
  circle: PropTypes.bool,
};

Avatar.defaultProps = {
  rounded: false,
  circle: false,
};

export default Avatar;
