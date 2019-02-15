import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '../Typography/Typography';
import classes from './Button.styles';

const ucfirst = input => input[0].toUpperCase() + input.slice(1);

const Button = ({ children, href, color, type, size }) => {
  const className = classNames(classes.root, classes[size], classes[color + ucfirst(type)]);

  return (
    <a className={className} href={href}>
      <Typography type="button">{children}</Typography>
    </a>
  );
};

Button.propTypes = {
  /**
   * The button type
   */
  type: PropTypes.oneOf(['flat', 'outlined']),

  /**
   * Color to use for the button
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),

  /**
   * The button size
   */
  size: PropTypes.oneOf(['normal', 'small']),
};

Button.defaultProps = {
  type: 'flat',
  color: 'default',
  size: 'normal',
};

export default Button;
