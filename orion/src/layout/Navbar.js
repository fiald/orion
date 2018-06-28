import React from 'react'
//  libs
import { Link } from 'react-router-dom'
//  components
import TableServiceOpenButton from '../components/Buttons/TableServiceOpenButton'

const Navbar = () => (
  <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">орион</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to="/form">Форма фиксирования сообщения</Link>
        </li>
        <li>
          <TableServiceOpenButton />
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
