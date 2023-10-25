import './rec.css'
import {Link, Outlet} from 'react-router-dom'

export default function Rec(props) {
  console.log(props)
  var sideposts = props.content.items.slice(0, 4)
  var recentposts = props.content.items.slice(5, 9)
  return(
    <main className='main-rec'>
      <div className='side-left'>
        {sideposts.map((post) => {
      let linktoreview = ""
      if (post.book_review_link !="") {
         linktoreview = post.book_review_link
       } else if(post.sunday_review_link !="") {
         linktoreview = post.sunday_review_link
       } else {
         linktoreview= 'noresult'
       }
          return(
            <div key={post.title} className='side-post'>
              <img src={post.book_image} alt="" />
              <Link reloadDocument to={linktoreview}>
                <div className='post-info'>
                  <span>{post.publisher}</span>
                  <h2>{post.description}</h2>
                  <h4>{post.title}</h4>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
      <div className='side-right'>
        {recentposts.map((post) => {
            let linknew = ""
      if (post.book_review_link !="") {
         linknew = post.book_review_link
       } else if(post.sunday_review_link !="") {
         linknew = post.sunday_review_link
       } else {
         linknew= 'noresult'
       }
          return(
            <div key={post.title} className='rec-post'>
                <span>{post.publisher}</span>
                <h2>{post.description}</h2>
                <Link reloadDocument to={linknew}><h4>{post.title}</h4></Link>
            </div>
          )
        })}
      </div>
      <Outlet />
    </main>
  )
}