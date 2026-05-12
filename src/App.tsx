import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white dark:focus:bg-ink-inverse dark:focus:text-ink"
      >
        Skip to content
      </a>
      <Nav />
      <main id="top">
        <Hero />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
