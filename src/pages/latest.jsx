import Navbar from '../components/navbar'
import Ad from '../components/ad'
import AllPost from '../components/allposts'
import Tabs from '../components/tabs'


import Footer from '../components/footer'
import {useState, useEffect} from 'react'

export default function Latest() {
  const [posts, setPosts] = useState({items: [] , isLoading: true})

  useEffect(() => {
    setTimeout(() => { 
        async function fetchData() {
          let response = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/paperback-graphic-books?api-key=bYJYGVuFn5QZngjHtW35eYo8AAVZAPP6')
          let parsedData = await response.json()
          let books = parsedData.results.books

          const newData = {
            items: books,
            isLoading: false
          }
          setPosts(newData)
        }

        fetchData()
    }, 5000)

   }, [])

  const quer = "latest"
  return(
    <main>
      <Navbar />
      <Tabs rout={quer} />
      <Ad />
      <AllPost content={posts} />
      <Ad />
      <Footer />
    </main>
  )
}
