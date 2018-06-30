import React from 'react'
//  libs
import { Link } from 'react-router-dom'

const Navbar = ({ withServiceLink, withConfirmLink }) => (
  <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">орион</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to="/">Форма фиксирования сообщения</Link>
        </li>
        {withServiceLink &&
          <li>
            <Link to="/services">Таблица предоставляемых услуг</Link>
          </li>
        }
        {withConfirmLink &&
          <li>
            <Link to="/confirm">Подтверждение заявки</Link>
          </li>
        }
      </ul>
    </div>
  </nav>
)

export default Navbar
