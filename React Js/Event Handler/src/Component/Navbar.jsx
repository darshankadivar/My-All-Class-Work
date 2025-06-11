import React from 'react'

export default function Navbar() {
  return (
    <div>
      <header>
            <nav className='nav'>
                <div className="logo">
                    <h1>Shopping hub</h1>
                </div>
                <div>
                    <ul className='list'>
                        <li><a href="#">home</a></li>
                        <li><a href="#">products</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">blog</a></li>
                        <li><a href="#">contact us</a></li>
                    </ul>
                </div>
            </nav>
      </header>
    </div>
  )
}
