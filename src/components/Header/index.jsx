import React from 'react'
import { Link } from 'react-router-dom'
import cls from './index.module.css'

const HeaderItems = [
   {
      id: 0,
      name: 'collection',
      route: '/collection',
   },
   {
      id: 1,
      name: 'about',
      route: '/about',
   }
]

const Header = () => {
   return (
      <header className={cls.header}>
         <Link to='/'>Home</Link>
         <ul>
            {
               HeaderItems.map((item) => (
                  <Link to={item.route} key={item.id}>{item.name}</Link>
               ))
            }
         </ul>
      </header>
   )
}

export default Header