import { Navigate } from "react-router";

interface RedirectProps {
    to: string
}
/**
 * Componente para redirecionamento declarativo de rotas.
 * 
 * Ao ser renderizado, transporta o usuário automaticamente para o destino 
 * informado, substituindo a entrada atual no histórico de navegação para 
 * evitar que o usuário retorne à página anterior ao clicar no botão "voltar".
 */
export function Redirect({ to }: RedirectProps) {
    return (
        <Navigate to={to} replace />
    )
}