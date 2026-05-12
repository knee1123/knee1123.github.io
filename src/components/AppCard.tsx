import type { App } from '../data/apps'
import { useFadeIn } from '../hooks/useFadeIn'

const SQUIRCLE_MASK = `url("data:image/svg+xml,%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xml%3Aspace%3D%22preserve%22%20viewBox%3D%220%200%20230.5%20230.5%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%221.4%22%20clip-rule%3D%22evenodd%22%20d%3D%22M158.2%20230H64.1a320%20320%200%200%201-7-.1c-5%200-10-.5-15-1.3a50.8%2050.8%200%200%201-14.4-4.8%2048.2%2048.2%200%200%201-21-21%2050.9%2050.9%200%200%201-4.8-14.4%20100.7%20100.7%200%200%201-1.3-15v-7l-.1-8.2V64.1a320%20320%200%200%201%20.1-7c0-5%20.5-10%201.3-15a50.7%2050.7%200%200%201%204.8-14.4%2048.2%2048.2%200%200%201%2021-21%2051%2051%200%200%201%2014.4-4.8c5-.8%2010-1.2%2015-1.3a320%20320%200%200%201%207%200l8.2-.1h94.1a320%20320%200%200%201%207%20.1c5%200%2010%20.5%2015%201.3a52%2052%200%200%201%2014.4%204.8%2048.2%2048.2%200%200%201%2021%2021%2050.9%2050.9%200%200%201%204.8%2014.4c.8%205%201.2%2010%201.3%2015a320%20320%200%200%201%20.1%207v102.3l-.1%207c0%205-.5%2010-1.3%2015a50.7%2050.7%200%200%201-4.8%2014.4%2048.2%2048.2%200%200%201-21%2021%2050.8%2050.8%200%200%201-14.4%204.8c-5%20.8-10%201.2-15%201.3a320%20320%200%200%201-7%200l-8.2.1z%22%2F%3E%0A%3C%2Fsvg%3E%0A")`

const SQUIRCLE_BORDER_PATH =
  'M158.2 230H64.1a320 320 0 0 1-7-.1c-5 0-10-.5-15-1.3a50.8 50.8 0 0 1-14.4-4.8 48.2 48.2 0 0 1-21-21 50.9 50.9 0 0 1-4.8-14.4 100.7 100.7 0 0 1-1.3-15v-7l-.1-8.2V64.1a320 320 0 0 1 .1-7c0-5 .5-10 1.3-15a50.7 50.7 0 0 1 4.8-14.4 48.2 48.2 0 0 1 21-21 51 51 0 0 1 14.4-4.8c5-.8 10-1.2 15-1.3a320 320 0 0 1 7 0l8.2-.1h94.1a320 320 0 0 1 7 .1c5 0 10 .5 15 1.3a52 52 0 0 1 14.4 4.8 48.2 48.2 0 0 1 21 21 50.9 50.9 0 0 1 4.8 14.4c.8 5 1.2 10 1.3 15a320 320 0 0 1 .1 7v102.3l-.1 7c0 5-.5 10-1.3 15a50.7 50.7 0 0 1-4.8 14.4 48.2 48.2 0 0 1-21 21 50.8 50.8 0 0 1-14.4 4.8c-5 .8-10 1.2-15 1.3a320 320 0 0 1-7 0l-8.2.1z'

type Props = { app: App; index: number }

export function AppCard({ app, index }: Props) {
  const ref = useFadeIn<HTMLElement>()

  return (
    <article
      ref={ref}
      className="fade-up group relative flex flex-col items-center rounded-3xl glass p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-cardHover"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <a
        href={app.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${app.name} を App Store で開く`}
        className="relative inline-block h-[140px] w-[140px] overflow-hidden transition-transform duration-300 group-hover:scale-[1.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent dark:focus-visible:outline-accent-dark"
      >
        <img
          src={app.iconUrl}
          alt=""
          width={140}
          height={140}
          loading="lazy"
          className="h-full w-full object-contain"
          style={{
            maskImage: SQUIRCLE_MASK,
            WebkitMaskImage: SQUIRCLE_MASK,
            maskSize: '100% 100%',
            WebkitMaskSize: '100% 100%',
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 230.5 230.5"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.12"
            strokeLinejoin="round"
            strokeMiterlimit={1.4}
            strokeWidth={1}
            d={SQUIRCLE_BORDER_PATH}
            clipRule="evenodd"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </a>

      <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink dark:text-ink-inverse">
        {app.name}
      </h3>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent dark:text-accent-dark">
        {app.tagline}
      </p>
      <div className="mt-4 space-y-2 text-sm leading-relaxed text-ink-soft dark:text-ink-inverse-soft jp-wrap">
        {app.description.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
        {app.note ? (
          <p className="pt-1 text-xs text-ink-soft/80 dark:text-ink-inverse-soft/70">
            ※ {app.note}
          </p>
        ) : null}
      </div>

      <a
        href={app.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink dark:text-ink-inverse hover:text-accent dark:hover:text-accent-dark transition"
      >
        View on App Store
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7 17L17 7M9 7h8v8" />
        </svg>
      </a>
    </article>
  )
}
