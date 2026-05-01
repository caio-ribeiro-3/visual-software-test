import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#5023d7',
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#171a1c',
      secondary: '#434a54',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: Array(25).fill('none') as any,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '1px solid #d0d7de',
          boxShadow: 'none',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: '#f6f8fa',
          fontWeight: 600,
          color: '#434a54',
          borderBottom: '1px solid #d0d7de',
        },
        root: {
          borderBottom: '1px solid #eff2f5',
        },
      },
    },
  },
});
