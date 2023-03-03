import { FiLink } from 'react-icons/fi'
import './home.css'
import Menu from '../../components/menu'
import { useState } from 'react'
import LinkItem from '../../components/LinkItem'

function Home() {
  const [link, setLink] = useState('')
  const [showModal, setShowModal] = useState(false)

  function handleShortLink() {
    setShowModal(true)
  }

  return (
    <div className="homePage">

      <div className="logo">
        <img src="/public/img/logo.png" alt="logo sujeito link" />
        <h1>SujeitoLink</h1>
        <span>Cole seu link para encurtar!</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color='#fff' />
          <input type="text"
            placeholder='Cole seu link aqui...'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortLink}>
          Encurtar link
        </button>
      </div>

      <Menu />
      {showModal && (
        <LinkItem
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

export default Home
