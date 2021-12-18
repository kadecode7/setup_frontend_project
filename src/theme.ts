import { createTheme } from '@mui/material/styles';
import { common, grey } from '@mui/material/colors';

declare module '@mui/material/styles' {
  // eslint-disable-next-line no-unused-vars
  interface CustomPalette {
    searchField: {
      main: string;
      light: string;
      dark?: string;
    };
  }

  // eslint-disable-next-line no-unused-vars
  interface Palette extends CustomPalette {}

  // eslint-disable-next-line no-unused-vars
  interface PaletteOptions extends CustomPalette {}

  // eslint-disable-next-line no-unused-vars
  interface Theme {
    custom: {
      buttonWidth: string;
    };
  }

  // allow configuration using `createTheme`
  // eslint-disable-next-line no-unused-vars
  interface ThemeOptions extends Theme {
  }
}

export const theme = createTheme({
  custom: {
    buttonWidth: '200px',
  },
  palette: {
    searchField: {
      main: common.white,
      light: grey[500],
    },
  },
});
