import { createStyleSheet } from '../../jss';

const makeFlatButton = (tokens) => ({
  '&:hover': {
    background: tokens.backgroundHover,
  },
  '&:active': {
    background: tokens.backgroundActive,
  },
  background: tokens.background,
  color: tokens.color,
});

const makeOutlinedButton = (tokens) => ({
  '&:hover': {
    background: tokens.backgroundHover,
    borderColor: tokens.borderHover,
  },
  '&:active': {
    background: tokens.backgroundActive,
    borderColor: tokens.borderActive,
  },
  border: `2px solid ${tokens.border}`,
  color: tokens.color,
});

export default createStyleSheet(({ buttons, borderRadius }) => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 40,
    appearance: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },

  defaultFlat: makeFlatButton(buttons.flat.default),
  primaryFlat: makeFlatButton(buttons.flat.primary),
  secondaryFlat: makeFlatButton(buttons.flat.secondary),

  defaultOutlined: makeOutlinedButton(buttons.outlined.default),
  primaryOutlined: makeOutlinedButton(buttons.outlined.primary),
  secondaryOutlined: makeOutlinedButton(buttons.outlined.secondary),

  normal: {
    padding: '8px 16px',
    height: 42,
    borderRadius: 21,
  },
  small: {
    padding: '4px 10px',
    height: 32,
    borderRadius: 16,
    fontSize: 14,
  },
}));

