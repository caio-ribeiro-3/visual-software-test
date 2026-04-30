import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0b6bcb', // Azul padrão do Joy UI
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
    borderRadius: 8, // Bordas suaves do Joy
  },
  shadows: Array(25).fill('none') as any, // Remove as sombras 3D do Material Design
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Joy UI não usa texto em caixa alta
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
          border: '1px solid #d0d7de', // Borda fina no lugar de sombras
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
