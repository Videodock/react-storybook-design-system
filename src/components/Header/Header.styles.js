import { createStyleSheet } from '../../jss';

export default createStyleSheet(({ header }) => ({
  root: {
    '& > nav': {
      flex: 1,
      textAlign: 'right',
    },
    display: 'flex',
    height: header.headerHeight,
    padding: '8px 16px',
    alignItems: 'center',
    backgroundColor: header.headerBackground,
    boxShadow: header.headerBoxShadow,
  },
}));

