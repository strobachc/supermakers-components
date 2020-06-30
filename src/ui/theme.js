import { createMuiTheme } from '@material-ui/core/styles';
import ApercuRegularWoff2 from '../assets/fonts/ApercuRegular.woff2';

const apercu = {
  fontFamily: 'Apercu',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Apercu'),
    local('Apercu-Regular'),
    url(${ApercuRegularWoff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff6d00',
    },
    secondary: {
      main: '#182a74',
    },
    info: {
      main: '#ffafa6',
    },
  },
  typography: {
    fontFamily: 'Apercu, Roboto, Arial',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [apercu],
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableElevation: true,
    },
  },
  shadows: ['none'],
});

export default theme;