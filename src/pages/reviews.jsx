import Navbar from '../components/navbar'
import Ad from '../components/ad'
import AllPost from '../components/allposts'
import Tabs from '../components/tabs'


import Footer from '../components/footer'
import {useState, useEffect} from 'react'

export default function Reviews() {
  const [posts, setPosts] = useState({items: [] , isLoading: true})

  useEffect(() => {
    setTimeout(() => { 
        async function fetchData() {
          let response = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction?api-key=API_KEY')
          let parsedData = await response.json()
          let books = parsedData.results.books

          const newData = {
            items: books,
            isLoading: false
          }
          setPosts(newData)
        }

        fetchData()
    }, 5000); 
        

   }, [])
  return(
    <main>
      <Navbar />
      <Tabs />
      <Ad />
      <AllPost content={posts} />
      <Ad />
      <Footer />
    </main>
  )
}
