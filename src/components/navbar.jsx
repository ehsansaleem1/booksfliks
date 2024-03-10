import './navbar.css'
import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Nav() {
  
  const [open, setOpen] = useState({ left: "-30rem" })

  return (
    <main>
      <div className="sidebar" style={open}>
        <h1 className="btn" onClick={() => setOpen({ left: "-30rem" })}>X</h1>
        <h1 className="logo">BookFlix</h1>
        <ul className="links">
          <li className="link"><Link className='link-links' reloadDocument to='/'>Home</Link></li>
          <li className="link"><Link className='link-links'  reloadDocument to='/bestseller'>Bestseller</Link></li>
          <li className="link"><Link className='link-links'  reloadDocument to='/reviews'>Reviews</Link></li>
          <li className="link"><Link className='link-links'  reloadDocument to='/latest'>Latest</Link></li>
        </ul>
        <p>Follow us on</p>
        <div className="media-icons">
          <h1><i className="fa-brands fa-square-instagram"></i></h1>
          <h1><i className="fa-brands fa-square-facebook"></i></h1>
          <h1><i className="fa-brands fa-square-github"></i></h1>
          <h1><i className="fa-brands fa-square-twitter"></i></h1>
        </div>
      </div>

      <nav className="navbar">
        <h1 className="logo">BookFlix</h1>
        <h1 onClick={() => setOpen({ left: "0rem" })} className="menu"><i className="fa-solid fa-bars"></i></h1>
      </nav>

      

      <Outlet />
    </main>
  )
}
