import './App.css'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { Skills } from './components/skills'

export default function App() {

  return (
    <div className='container'>
      <Header />
      <Hero />
      <main>
        <Skills />
      </main>
      <footer></footer>
    </div>
  )
}
