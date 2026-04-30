import MUISkeleton from '@mui/material/Skeleton'



/**
 * Componente de carregamento.
 * 
 * Fornece um espaço reservado visual que simula o formato do conteúdo 
 * final, reduzindo a percepção de tempo de espera e evitando saltos 
 * de layout durante o carregamento de dados.
 */
export function Skeleton() {
    return (
        <MUISkeleton />
    )
}