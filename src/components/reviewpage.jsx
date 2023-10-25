export default function ReviewPage(props) {
    console.log(props.post)
    if (props.post) {
      return(
      <div className="post-review">
        <h1 className="title">{props.post.items.book_title}</h1>
        <h3>{props.post.items.book_author}</h3>
        <h3>{props.post.items.publication_dt}</h3>
        <h1>{props.post.items.summary}</h1>

      </div>
        )
    }
   else {
     return(
       <h1>No Summary Available</h1>
     )
   }
}