import './App.css'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { Skills } from './components/skills'
import { WorksExp } from './components/worksExp'

export default function App() {

  return (
    <div className='container'>
      <Header />
      <Hero />
      <main>
        <Skills />
        <WorksExp />
      </main>
      <footer></footer>
    </div>
  )
}
