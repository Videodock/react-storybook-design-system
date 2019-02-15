import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Avatar.styles';

const Avatar = ({ src, rounded, circle }) => {
  const className = classNames(classes.root, {
    [classes.rounded]: !!rounded,
    [classes.circle] : !!circle,
  });

  return (
    <img src={src} alt="Avatar" className={className} />
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
