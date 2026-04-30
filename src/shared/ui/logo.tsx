import logo from '@/assets/logo_visual_software.png'
import { Link } from '@/shared/infra/router/link'

export function Logo() {
    return (
        <Link to='/'>
            <img src={logo} loading='eager' width={120} />
        </Link>
    )
}