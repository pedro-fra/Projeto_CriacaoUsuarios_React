/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import './Logo.css'
import React from 'react'
import Logo from '../../assets/imgs/logo.png'
import {Link} from 'react-router-dom'

export default (props) => (
  <aside className='logo'>
    <Link to='/' className='logo'>
      <img src={Logo} alt='logo' />
    </Link>
  </aside>
)
