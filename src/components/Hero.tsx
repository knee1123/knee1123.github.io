import { useFadeIn } from '../hooks/useFadeIn'

export function Hero() {
  const ref = useFadeIn<HTMLDivElement>()

  return (
    <section id="about" className="relative pt-20 pb-24 md:pt-28 md:pb-32">
      <div ref={ref} className="fade-up mx-auto max-w-3xl px-5 text-center md:px-8">
        <div className="relative mx-auto mb-8 h-32 w-32 md:h-40 md:w-40">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-accent/30 to-accent-dark/30 blur-2xl"
          />
          <img
            src="https://avatars.githubusercontent.com/u/40302083?v=4"
            alt="knee1123 avatar"
            width={160}
            height={160}
            loading="eager"
            className="h-full w-full rounded-full object-cover ring-1 ring-black/10 dark:ring-white/15 shadow-card"
          />
        </div>

        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-ink-soft dark:text-ink-inverse-soft">
          iOS Developer
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
          knee1123
        </h1>
        <div className="mx-auto mt-6 max-w-md space-y-4 text-base leading-relaxed text-ink-soft dark:text-ink-inverse-soft md:text-lg">
          <p className="jp-wrap text-balance">
            普段は 3D 点群や AR まわりの iOS アプリ開発に携わっています。
          </p>
          <p className="jp-wrap text-balance">
            個人でも iOS アプリを作っていて、いくつか App Store で公開しています。
          </p>
          <p className="jp-wrap text-balance">
            2015 年に高専に入学し、大学編入を経て、iOS エンジニアとして勤務しています。
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault()
              const target = document.getElementById('work')
              if (!target) return
              const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
              target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
            }}
            className="btn-primary"
          >
            Selected Work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
          <a
            href="https://github.com/knee1123"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.95-3.2.69-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.95 10.95 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.2 0 .31.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://zenn.dev/knee"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.468-.118.586-.353z" />
            </svg>
            Zenn
          </a>
        </div>
      </div>
    </section>
  )
}
