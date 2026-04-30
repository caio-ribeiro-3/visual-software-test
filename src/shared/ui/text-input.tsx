import TextField from '@mui/material/TextField';

interface TextInputProps {
    type?: React.HTMLInputTypeAttribute;
    name: string;
    label: string;
    value: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement, Element>;
    error?: string;
}
/**
 * Componente de input de texto padronizado.
 * 
 * Abstrai a lógica de campos de formulário, integrando rótulos, 
 * estados de erro e mensagens de auxílio de forma automática.
 */
export function TextInput({
    label,
    name,
    onChange,
    value,
    error,
    type
}: TextInputProps) {
    return (
        <TextField
            fullWidth
            label={label}
            name={name}
            value={value}
            type={type}
            onChange={onChange}
            error={Boolean(error)}
            helperText={error}
        />
    )
}