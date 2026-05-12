import { ThemeToggle } from './ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

function smoothScrollTo(hash: string) {
  const id = hash.replace('#', '')
  const target = document.getElementById(id)
  if (!target) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  history.replaceState(null, '', hash)
}

export function Nav() {
  return (
    <header className="sticky top-0 z-50 glass border-b">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
            history.replaceState(null, '', '#top')
          }}
          className="text-sm font-semibold tracking-tight text-ink dark:text-ink-inverse"
        >
          knee1123
        </a>

        <div className="flex items-center gap-1 md:gap-2">
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScrollTo(l.href)
                  }}
                  className="rounded-full px-3 py-1.5 text-sm text-ink/70 transition hover:bg-black/5 hover:text-ink dark:text-ink-inverse/70 dark:hover:bg-white/10 dark:hover:text-ink-inverse"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
