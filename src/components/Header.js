import React from 'react'

const Header = () => {

  return (
    <header className='bg-black text-white flex justify-between px-7 py-3'>
      <h1>sample web</h1>
      <nav className='space-x-7'>
        <a href="">about</a>
        <a href="">contact</a>
      </nav>
    </header>

  )
}

export default Header
