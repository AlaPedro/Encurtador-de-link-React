import './links.css'
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function MeusLinks() {

    return (
        <div className="linksPage">
            <div className='links-header'>
                <Link to='/'>
                    <FiArrowLeft size={38} color='#fff' />
                </Link>
                <h1>Meus links</h1>
            </div>

            <div className="links-item">
                <button className='link'>
                    <FiLink size={18} color='#fff' />
                    https://sujeitoprogramador.com
                </button>
                <button className='link-delete'>
                    <FiTrash size={24} color='#ff5454' />
                </button>
            </div>

            <div className="links-item">
                <button className='link'>
                    <FiLink size={18} color='#fff' />
                    https://sujeitoprogramador.com
                </button>
                <button className='link-delete'>
                    <FiTrash size={24} color='#ff5454' />
                </button>
            </div>
        </div >
    )
}

export default MeusLinks
