import { FiLink } from 'react-icons/fi'
import './home.css'
function Home() {

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
          <input type="text" placeholder='Cole seu link aqui...' />
        </div>
        <button>
          Encurtar link
        </button>
      </div>
    </div>
  )
}

export default Home
