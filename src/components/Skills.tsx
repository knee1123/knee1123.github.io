import { useFadeIn } from '../hooks/useFadeIn'

type Language = {
  name: string
  blurb: string
  frameworks: readonly string[]
}

const languages: readonly Language[] = [
  {
    name: 'Swift',
    blurb:
      '業務では3D点群や、AR機能の開発を主に行っています。',
    frameworks: ['ARKit', 'RealityKit', 'SwiftUI', 'UIKit'],
  },
  {
    name: 'Python',
    blurb:
      '大学の研究で異常検知のために用いていました。',
    frameworks: ['PyTorch'],
  },
]

export function Skills() {
  const ref = useFadeIn<HTMLDivElement>()

  return (
    <section id="stack" className="scroll-mt-20 py-20 md:py-24">
      <div ref={ref} className="fade-up mx-auto max-w-5xl px-5 text-center md:px-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent dark:text-accent-dark">
          Stack
        </p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          技術スタック
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-pretty text-sm text-ink-soft dark:text-ink-inverse-soft md:text-base">
          これまで触れてきた言語と、その周辺で扱っているフレームワーク。
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 text-left">
          {languages.map((lang) => (
            <li
              key={lang.name}
              className="glass rounded-3xl p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-cardHover"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-ink dark:text-ink-inverse">
                {lang.name}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-ink-inverse-soft">
                {lang.blurb}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {lang.frameworks.map((fw) => (
                  <li key={fw} className="chip">
                    {fw}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
