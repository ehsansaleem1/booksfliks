import './navbar.css'
import { Outlet, Link } from "react-router-dom";

export default function Tabs() {
  return(
    <div className="tabs-section">
      <h2 className="categs"><Link className='link-links' reloadDocument to='/latest/category=hardcover-fiction'>Fiction</Link></h2>        
      <h2 className="categs"><Link className='link-links' reloadDocument to='/latest/category=hardcover-nonfiction'>Non-Fiction</Link></h2>
      <h2 className="categs"><Link className='link-links' reloadDocument to='/latest/category=paperback-graphic-books'>Graphic Books</Link></h2>
      <h2 className="categs"><Link className='link-links' reloadDocument to='/latest/category=mass-market-paperback'>Mass Market Paperback</Link></h2>
      <h2 className="categs"><Link className='link-links' reloadDocument to='/latest/category=combined-print-and-e-book-fiction'>E Book Fiction</Link></h2>
      <h2 className="categs"><Link className='link-links' reloadDocument to='/latest/category=combined-print-and-e-book-nonfiction'>E Book Non-Fiction</Link></h2>

      <Outlet />

    </div>
  )
}