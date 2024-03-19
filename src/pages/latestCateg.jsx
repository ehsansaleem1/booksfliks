import Navbar from '../components/navbar'
import Ad from '../components/ad'
import AllPost from '../components/allposts'
import Tabs from '../components/tabs'

import { useParams } from 'react-router-dom'


import Footer from '../components/footer'
import {useState, useEffect} from 'react'

export default function LatestCateg() {
  const [posts, setPosts] = useState({items: [] , isLoading: true})

  let {category} = useParams()

  const newquery = category.replace("category=", "")
  console.log(newquery)
  useEffect(() => {
    setTimeout(() => { 
        async function fetchData() {
          let response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${newquery}?api-key=${process.env(API_KEY)}`)
          let parsedData = await response.json()
          let books = parsedData.results

          const newData = {
            items: books.books,
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
      <h1 className='header-title'>Showing results for {newquery}</h1>
      <AllPost content={posts} />
      <Ad />
      <Footer />
    </main>
  )
}
