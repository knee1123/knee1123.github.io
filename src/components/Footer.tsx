export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-8 text-center text-xs text-ink-soft dark:text-ink-inverse-soft">
      © {year} knee1123. Built with React, Tailwind, and care.
    </footer>
  )
}
