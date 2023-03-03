import './linkItem.css'
import { FiX, FiClipboard } from 'react-icons/fi'
export default function LinkItem({ closeModal }) {
    return (
        <div className='modal-container'>
            <div className='modal-header'>
                <h2>Link encurtado</h2>
                <button onClick={closeModal}><FiX size={28} color='#000' /></button>
            </div>

            <span>www.badalasite.com</span>

            <button className='modal-link'>
                https://bit.ly/123123
                < FiClipboard color='#fff' size={20} />
            </button>
        </div>
    )
}