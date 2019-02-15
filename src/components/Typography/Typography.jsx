import React from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import classes from './Typography.styles';

const componentMapping = {
  h1:     'h1',
  h2:     'h2',
  h3:     'h3',
  h4:     'h4',
  h5:     'h5',
  h6:     'h6',
  body:   'p',
  button: 'span',
};

const Typography = ({ children, type }) => {
  const Component = componentMapping[type] || 'p';
  const className = classNames(classes.root, classes[type]);

  return (
    <Component className={className}>{children}</Component>
  );
};

Typography.propTypes = {
  /**
   * The type Typography to render
   */
  type: PropTypes.oneOf(['body', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'button']),
};

Typography.defaultProps = {
  type: 'body',
};

export default Typography;
