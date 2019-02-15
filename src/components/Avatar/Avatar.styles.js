import { createStyleSheet } from '../../jss';

export default createStyleSheet(({ borderRadius }) => ({
  root: {
    width: 50,
    height: 50,
  },
  rounded: {
    borderRadius: borderRadius.borderRadiusSmall,
  },
  circle: {
    borderRadius: borderRadius.borderRadiusCircle,
  },
}));

