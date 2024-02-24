import Navbar from '../components/navbar'
import Ad from '../components/ad'
import AllPost from '../components/allposts'
import Tabs from '../components/tabs'
import ReviewPage from '../components/reviewpage'

import { useParams } from 'react-router-dom'


import Footer from '../components/footer'
import {useState, useEffect} from 'react'

export default function LatestCateg() {
  const [posts, setPosts] = useState({items: [] , isLoading: true})

  let {title} = useParams()

  const newquery = title.replace("title=", "")
  console.log(newquery)
  useEffect(() => {
    setTimeout(() => { 
        async function fetchData() {
          let response = await fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?isbn=${newquery}&api-key=bYJYGVuFn5QZngjHtW35eYo8AAVZAPP6`)
          let parsedData = await response.json()
          let books = parsedData.results[0]

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
      <ReviewPage post={posts} />
      <Ad />
      <Footer />
    </main>
  )
}
