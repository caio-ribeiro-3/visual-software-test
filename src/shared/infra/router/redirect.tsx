import { Navigate } from "react-router";

interface RedirectProps {
    to: string
}

export function Redirect({ to }: RedirectProps) {
    return (
        <Navigate to={to} replace />
    )
}