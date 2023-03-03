import './menu.css'
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className='menu'>
            <a href="http://youtube.com" className='social'> <BsYoutube color='#fff' size={24} /></a>

            <a href="http://instagram.com" className='social'> <BsInstagram color='#fff' size={20} /></a>

            <Link to='/links' className='menu-item'>
                Meus links
            </Link>
        </div>
    )
}