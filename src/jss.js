import jss  from 'jss';
import presetDefault from 'jss-preset-default';
import theme from './theme';

const instance = jss.setup(presetDefault());

const createStyleSheet = (styles) => {
  // Create stylesheet with a theme
  if (typeof styles === 'function') {
    styles = styles(theme);
  }

  const sheet = instance.createStyleSheet(styles).attach();

  return sheet.classes;
};

export {
  instance,
  createStyleSheet,
};
