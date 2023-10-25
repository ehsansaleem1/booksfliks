import './postgrid.css'
import { Link , Outlet} from 'react-router-dom'

export default function postGrid(props) {
  

  if (props.content.isLoading) {
    return <h1 className='msg'>Loading Please Wait  <i className="fa-solid fa-circle-notch spinner"></i></h1>
  }
  console.log(props.content.isLoading)

  var styleMain = {
    backgroundImage: `url(${props.content.items[0].book_image})`
  }

  var twoPosts = []

  for(let i=1; i<=2; i++) {
    twoPosts.push(props.content.items[i])
  }
   console.log(twoPosts)
  let link = ""
  if (props.content.items[0].book_review_link !="") {
    link = props.content.items[0].book_review_link
  } else if (props.content.items[0].sunday_review_link !="") {
    link = props.content.items[0].sunday_review_link
  } else {
    link = "noresult"
  }
  
  return (
    <main>
      <div className="front-section">
        <Link reloadDocument to={link}>
        
          <div className="main-post" style={styleMain}>
              <button className="badge">{props.content.items[0].publisher}</button>

              <h1>{props.content.items[0].description}</h1>











            

              <h2 className="date">
                  {props.content.items[0].title}
              </h2>
          </div>
          </Link>
          <div className="side-posts">
            {twoPosts.map((post) => {
             let link2 = ""
             if (post.book_review_link !="") {
               link2 = post.book_review_link
             } else if(post.sunday_review_link !="") {
               link2 = post.sunday_review_link
             } else {
               link2= 'noresult'
             }
              return (
                <div className="post" key={post.title}>
                    <img src={post.book_image} alt="" />
                  <Link reloadDocument to={link2}>
                    <div className="contain">
                        <h2>{post.description.slice(0, 50)+ "..."}</h2>
                        <div className="text">
                            <h3>{post.title}</h3> <button className="badge">{post.publisher}</button>
                        </div>
                    </div>
                    </Link>

                </div>
              )
            
            })}
             
          </div>
      </div>
      <Outlet />
    </main>
  )
}