import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const links = [
        {
            title: 'Signup',
            path: '/'
        },
        {
            title: 'Login',
            path: '/login'
        },
        {
            title: 'Dashboard',
            path: '/dashboard'
        },
    ]
  return (
    <div>
     {links.map((e)=>(
        <div key={e}>
          <Link to={e.path}>{e.title}</Link>
          </div>
     ))}
    </div>
  )
}

export default Navbar
