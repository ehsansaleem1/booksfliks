import Navbar from '../components/navbar'
import Ad from '../components/ad'
import AllPost from '../components/allposts'

import Footer from '../components/footer'
import {useState, useEffect} from 'react'

export default function Books() {
  const [posts, setPosts] = useState({items: [] , isLoading: true})

  

  useEffect(() => {
    setTimeout(() => { 
      async function fetchData() {
        let response = await fetch('https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=API_KEY'
        let parsedData = await response.json()
        let books = parsedData.results.lists
        let booksnew= books[0].books

        const newData = {
          items: booksnew,
          isLoading: false
        }
        setPosts(newData)
      }

      fetchData() 
        }, 5000)

   }, [])
  return(
    <main>
      <Navbar />
      <Ad />
      <AllPost content={posts} />
      <Ad />
      <Footer />
    </main>
  )
}
