import './error.css'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div className='container-error'>
            <img src="./public/img/404.png" alt="Página não encontrada" />
            <h1>Error 404</h1>
            <span>Página não encontrada</span>
            <Link to='/'>
                Voltar para página inicial!
            </Link>
        </div>
    )
}