import logo from '@/assets/logo_visual_software.png'
import { Link } from '@/shared/infra/router/link'



/**
 * Componente de identidade visual da marca.
 * 
 * Exibe o logotipo da aplicação com navegação integrada para a página inicial,
 * utilizando carregamento priorizado para garantir visibilidade imediata.
 */
export function Logo() {
    return (
        <Link to='/'>
            <img role='img' src={logo} loading='eager' width={120} />
        </Link>
    )
}