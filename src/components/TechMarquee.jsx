import { skillGroups } from '../data/skills'

const items = skillGroups.flatMap((g) => g.skills)

export default function TechMarquee() {
  return (
    <div className="marquee" aria-label="Technologies I work with">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="marquee__group" aria-hidden={copy === 1 ? 'true' : undefined}>
            {items.map((s) => (
              <li key={s.name}><s.icon aria-hidden="true" /> {s.name}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
