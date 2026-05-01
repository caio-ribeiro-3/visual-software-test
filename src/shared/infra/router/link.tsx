import type { PropsWithChildren } from "react";
import { Link as RRDLink } from "react-router";

/**
 * Componente de navegação agnóstico a dependências externas.
 * 
 * Abstrai a lógica de roteamento interna, garantindo uma interface simplificada
 * para a criação de links na aplicação com suporte a classes CSS personalizadas.
 */
export const Link = ({ children, to, className = '' }: PropsWithChildren<{ to: string, className?: string }>) => (
    <RRDLink role="link" to={{ pathname: to }} className={className}>{children}</RRDLink>
)