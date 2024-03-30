import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav: React.FC = () => {
  return (
    <nav className='nav__header'>
      <ul>
        <li>
          <NavLink to='/' end className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Acceuil
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : undefined)}>
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
