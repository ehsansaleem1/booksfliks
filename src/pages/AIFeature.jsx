import Navbar from '../components/navbar'
import Footer from '../components/footer'
import "../components/AIFeature.css"
import {useState} from 'react'
export default function AIFeature() {
  const [text, setText] = useState('')
  const [val, setVal] = useState("")
  const [responsing, setResponse] = useState({items: [], isLoading: true})
  
  function valUpdate(e) {
    setVal(e.target.value)
  }
  async function funcmsg(e) {
    if (e && e.preventDefault) {e.preventDefault()}
    setText(val)
    const newText = text.replace(" ", "")
    const response = await fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?title=${text}&api-key=bYJYGVuFn5QZngjHtW35eYo8AAVZAPP6`, {mode: "cors"}).then((result) => {
      console.log(result)
      const newquery = {
        items: result.results,
        isLoading: false
      }
      setResponse(newquery)
      console.log(responsing)
    })
      setVal("")
}
  return(
    <main>
      <Navbar />
      <div className='msgbox'>
        <h1>{(responsing.items) ? responsing.items[0].summary : "No Information"}</h1>
      </div>
      <form>
        <input placeholder="Search" value={val} className='text-inp' onChange={valUpdate} type='text'></input>
        <button onClick={funcmsg} className='submit-btn'>Enter</button>
      </form>
      <Footer />
    </main>
  )
}