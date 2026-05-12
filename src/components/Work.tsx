import { apps } from '../data/apps'
import { AppCard } from './AppCard'
import { useFadeIn } from '../hooks/useFadeIn'

export function Work() {
  const headerRef = useFadeIn<HTMLDivElement>()

  return (
    <section id="work" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div ref={headerRef} className="fade-up mb-12 text-center md:mb-16">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent dark:text-accent-dark">
            Selected Work
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            App Store で配信中のアプリ
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm text-ink-soft dark:text-ink-inverse-soft md:text-base">
            個人開発で公開している iOS アプリ。タップで App Store へ。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app, i) => (
            <AppCard key={app.id} app={app} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
