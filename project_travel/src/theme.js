import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e55a1eff', // Your new primary color
    },
    secondary: {
      main: '#ff0000ff', // Your new secondary color
    },
    background: {
      default: '#f4f4f4', // Background color
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif', // ✅ single quotes used
  },
});

export default theme;
