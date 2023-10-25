import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './noresults.css'

export default function NoResult() {
  return(
    <div>
      <Navbar />
      <h1 className='no-msg'>No results available for this Book</h1>
      <Footer />
    </div>
  )
}