import './App.css'
import { About } from './components/about'
import { Footer } from './components/footer'
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
      <aside>
        <About />
      </aside>
      <Footer />
    </div>
  )
}
