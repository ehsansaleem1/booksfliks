import './footer.css'
import {Link, Outlet} from 'react-router-dom'

export default function Footer() {
  return(
    <>
    <div className="footer">
        <div className="footer-content">
            <div className="links-footer">
                <h1>Navigation</h1>
                <ul className="links-2">
                    <li className="link"><Link className='link-links' reloadDocument to='/'>Home</Link></li>
                    <li className="link"><Link className='link-links'  reloadDocument to='/bestseller'>Bestseller</Link></li>
                    <li className="link"><Link className='link-links'  reloadDocument to='/reviews'>Reviews</Link></li>
                    <li className="link"><Link className='link-links'  reloadDocument to='/latest'>Latest</Link></li>
                </ul>
            </div>

            <div className="categories">
                <h1>Categories</h1>
                <ul className="categories">
                    <h4 className="categs"><Link className='link-links' reloadDocument to='/latest/category=hardcover-fiction'>Fiction</Link></h4>        
                    <h4 className="categs"><Link className='link-links' reloadDocument to='/latest/category=hardcover-nonfiction'>Non-Fiction</Link></h4>
                    <h4 className="categs"><Link className='link-links' reloadDocument to='/latest/category=paperback-graphic-books'>Paperback Graphic Books</Link></h4>
                    <h4 className="categs"><Link className='link-links' reloadDocument to='/latest/category=mass-market-paperback'>Mass Market Paperback</Link></h4>
                    <h4 className="categs"><Link className='link-links' reloadDocument to='/latest/category=combined-print-and-e-book-fiction'>E Book Fiction</Link></h4>
                    <h4 className="categs"><Link className='link-links' reloadDocument to='/latest/category=combined-print-and-e-book-nonfiction'>E Book Non-Fiction</Link></h4>
                </ul>
            </div>

            <div className="about-us">
                <h1>About Us</h1>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore pariatur, saepe ex sapiente voluptatum itaque unde omnis dolorem veniam. Unde voluptatum officiis quis accusamus quidem qui cupiditate error</h4>

                <div className="buttons">
                    <button>
                        Facebook
                    </button>
                    <button>
                        Instagram
                    </button>

                    <button>
                        Twitter
                    </button>
                    <button>
                        Github
                    </button>
                </div>
            </div>
        </div>
    </div>

    <footer className="section-last">
        <h3>Copyright 2023-2024. All Rights Reserved. Read Privacy Policy!</h3>

      <Outlet />
    </footer>
      </>
  )
}