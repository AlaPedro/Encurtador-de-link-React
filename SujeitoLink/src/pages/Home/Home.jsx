import { FiLink } from 'react-icons/fi'
import './home.css'
import Menu from '../../components/menu'
import { useState } from 'react'
import LinkItem from '../../components/LinkItem'
import api from '../../services/api'

function Home() {
  const [link, setLink] = useState('')
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)

  async function handleShortLink() {

    try {
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data)
      setShowModal(true)

      setLink('')

    } catch {
      alert('ops, parece que algo deu errado')
      setLink('')
    }
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
          content={data}
        />
      )}
    </div>
  )
}

export default Home
