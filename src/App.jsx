import './App.css'
import Home from './pages/home'
import Books from './pages/books'
import Latest from './pages/latest'
import LatestCateg from './pages/latestCateg'
import Reviews from './pages/reviews'
import Review from './pages/review'
import NoPage from './pages/noresult'
import { Routes, Route } from "react-router-dom";

export default function App() {
  if (typeof window !== 'undefined') {
      localStorage.setItem('Collection', JSON.stringify({CollectionName: "Book Collection", items:[]}));
      console.log(JSON.parse(localStorage.getItem('Collection')))
  }
  
  return (
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="bestseller" element={<Books />} />
        <Route path="latest" element={<Latest />} /> 
        <Route path="noresult" element={<NoPage />} />                
        <Route path="latest/:category" element={<LatestCateg />} />
        <Route path="latest/noresult" element={<NoPage />} />
        <Route path="reviews" element={<Reviews />} />              
        <Route path="latest/reviews/:title" element={<Review />} />    
        <Route path="latest/reviews/noresult" element={<NoPage />} />  
        <Route path="reviews/noresult" element={<NoPage />} />
        <Route path="latest/:category/reviews/:title" element={<Review />} />
        <Route path="latest/:category/reviews/noresult" element={<NoPage />} />


      </Routes>
    </main>
  )
}
