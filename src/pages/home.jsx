import Navbar from '../components/navbar'
import PostGrid from '../components/postgrid'
import PostBundle from '../components/postBundle'
import Ad from '../components/ad'
import Rec from '../components/rec'
import Footer from '../components/footer'

import {useState, useEffect} from 'react'



export default function Home() {
  const [posts, setPosts] = useState({items: [] , isLoading: true})

    useEffect(() => {
      setTimeout(() => { 
          async function fetchData() {
            let response = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/paperback-graphic-books?api-key==bYJYGVuFn5QZngjHtW35eYo8AAVZAPP6')
            let parsedData = await response.json()
            let books = parsedData.results.books
            console.log(books)
            const newData = {
              items: books,
              isLoading: false
            }
            setPosts(newData)
          }


          fetchData()
      }, 5000); 
       

   }, [])


  console.log(posts)
  var likedposts = []

  for(let i=0; i<=9; i++) {
    likedposts.push(posts.items[i])
  }
  console.log(likedposts)
  return (
    <main>
      <Navbar />
      <PostGrid content={posts} />      
      <PostBundle content={posts} />      
      <Ad />
      <PostGrid content={posts} />
      <Rec content={posts} />
      <Footer />

    </main>
  )
}
