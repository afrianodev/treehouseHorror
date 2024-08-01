import './App.css'
import Header from './components/Header'
import Recomendations from './components/Recomendations'
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
  <>
  <Header />
  <Recomendations />
  <section className='bg-black'>movies scroll section</section>
  
  </>
  )
}

export default App
