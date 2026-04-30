import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import GroupAddIcon from '@mui/icons-material/GroupAdd';

interface ListEmptyFeedbackProps {
    title: string;
    description: string;
}

export const ListEmptyFeedback = ({ title, description }: ListEmptyFeedbackProps) => (
    <Box
        sx={{
            p: 8,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: 'background.paper',
            borderRadius: 2,
            border: '1px dashed #d0d7de'
        }}
    >
        <GroupAddIcon sx={{ fontSize: 48, color: 'text.disabled', mb: 2 }} />
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 300 }}>
            {description}
        </Typography>

    </Box>
);