import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface ListErrorFeedbackProps {
  message: string;
}
/**
 * Componente de feedback visual para falhas no carregamento de dados.
 * 
 * Apresenta uma mensagem de erro estilizada para informar ao usuário que
 * houve um problema na listagem de dados.
 */
export const ListErrorFeedback = ({ message }: ListErrorFeedbackProps) => (
  <Box
    sx={{
      p: 6,
      textAlign: 'center',
      bgcolor: 'rgba(255, 0, 0, 0.02)',
      borderRadius: 2,
      border: '1px solid #ffccd2'
    }}
  >
    <Typography variant="body1" color="error.main" gutterBottom>
      Ops! Algo deu errado.
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
      {message}
    </Typography>
  </Box>
);
