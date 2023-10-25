import './postBundle.css'
import {Link, Outlet} from 'react-router-dom'
import {useState} from 'react'

export default function postBundle(props) {
  return (
    <main>
      <div className="new-posts">
          <h1 className="title-new">
             New Books!
          </h1>
            {props.content.items.map((postbun) => {
      let link = ""
      if (postbun.book_review_link !="") {
        link = postbun.book_review_link
      } else if ( postbun.sunday_review_link !="") {
        link = postbun.sunday_review_link
      } else {
        link = "noresult"
      }
            return(
              <div className="post-new" key={postbun.title}>
                  <img src={postbun.book_image} alt="" />
                  <div className="post-info">
                      <button className="badge">{postbun.publisher}</button>
                      <h1 className="post-title">
                        {postbun.description}
                      </h1>
                      <h2 className="date-time">{postbun.title}</h2>
                    <button className='btn-m'><Link reloadDocument to={link}> Read Review</Link></button>
                  </div>

              </div>
            )
              
            })}
          
      </div>
      <Outlet />
    </main>
  )
}