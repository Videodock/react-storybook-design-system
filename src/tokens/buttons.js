import colors from './colors';

export default {
  flat: {
    default: {
      background: colors.brandDefault,
      backgroundHover: colors.brandDefaultDark,
      backgroundActive: colors.brandDefaultDarker,
      color: colors.brandTextPrimary,
    },
    primary: {
      background: colors.brandPrimary,
      backgroundHover: colors.brandPrimaryDark,
      backgroundActive: colors.brandPrimaryDarker,
      color: '#FFFFFF',
    },
    secondary: {
      background: colors.brandSecondary,
      backgroundHover: colors.brandSecondaryDark,
      backgroundActive: colors.brandSecondaryDarker,
      color: '#FFFFFF',
    },
  },
  outlined: {
    default: {
      backgroundHover: 'rgba(183, 183, 183, 0.15)',
      backgroundActive: 'rgba(183, 183, 183, 0.25)',
      border: colors.brandDefault,
      borderHover: colors.brandDefaultDark,
      borderActive: colors.brandDefaultDarker,
      color: colors.brandTextPrimary,
    },
    primary: {
      backgroundHover: 'rgba(65, 108, 225, 0.15)',
      backgroundActive: 'rgba(65, 108, 225, 0.25)',
      border: colors.brandPrimary,
      borderHover: colors.brandPrimaryDark,
      borderActive: colors.brandPrimaryDarker,
      color: colors.brandPrimary,
    },
    secondary: {
      backgroundHover: 'rgba(254, 24, 63, 0.15)',
      backgroundActive: 'rgba(254, 24, 63, 0.25)',
      border: colors.brandSecondary,
      borderHover: colors.brandSecondaryDark,
      borderActive: colors.brandSecondaryDarker,
      color: colors.brandSecondary,
    },
  },
};
