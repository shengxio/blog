import { about, contact } from '../content/home.json';
import { featured } from '../content/projects.json';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl">
      <section id="about" aria-labelledby="about-heading" className="scroll-mt-6 pb-10 pt-12 sm:pb-14 sm:pt-16 lg:pt-20">
        <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-primary">{about.eyebrow}</p>
        <h1 id="about-heading" className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {about.title}
        </h1>
        <p className="mt-5 max-w-[38rem] text-lg leading-relaxed text-muted-foreground sm:text-xl">{about.bio}</p>
        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a href="#miminions" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            {about.currentWorkLinkLabel}<span aria-hidden="true">&darr;</span>
          </a>
          <a href="#projects" className="text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary">
            {about.archiveLinkLabel}
          </a>
        </div>
      </section>

      <section id="miminions" aria-labelledby="miminions-heading" className="grid scroll-mt-6 gap-8 rounded-xl border border-border bg-card p-5 sm:p-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div>
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-primary">{featured.label}</p>
          <h2 id="miminions-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">{featured.title}</h2>
          <p className="mt-4 max-w-prose text-lg font-medium leading-relaxed">{featured.description}</p>
          <p className="mt-3 max-w-prose leading-relaxed text-muted-foreground">{featured.focus}</p>
          <p className="mt-5 max-w-prose border-l-2 border-primary/40 pl-3 text-sm leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">{featured.availableLabel}:</strong> {featured.available}
          </p>
          <a href={featured.sourceUrl} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary">
            {featured.sourceLinkLabel}<span aria-hidden="true">&#8599;</span>
          </a>
        </div>
        <figure className="self-center rounded-lg border border-border bg-accent p-4 sm:p-5">
          <figcaption className="mb-4 font-mono text-xs uppercase tracking-wide text-muted-foreground">{featured.concept.caption}</figcaption>
          <ol role="list" className="divide-y divide-border">
            {featured.concept.steps.map(({ title, description }, index) => (
              <li key={title} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 py-3 first:pt-0 last:pb-0">
                <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/25 font-mono text-xs font-semibold text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </figure>
      </section>

      <ProjectsSection />
      <SkillsSection />

      <footer id="contact" aria-labelledby="contact-heading" className="mt-14 scroll-mt-6 border-t border-border pt-7 sm:mt-16">
        <h2 id="contact-heading" className="text-2xl font-semibold tracking-tight">{contact.title}</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <h3 className="mb-2 text-sm font-semibold">{contact.detailsTitle}</h3>
            <a href={`mailto:${contact.email}`} className="break-all text-sm text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary">
              {contact.email}
            </a>
            <p className="mt-1 text-sm text-muted-foreground">{contact.location}</p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold">{contact.socialTitle}</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {[contact.linkedin, contact.github].map(({ url, label }) => (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
