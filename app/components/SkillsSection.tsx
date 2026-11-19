import SkillCategory from './SkillCategory';
import skills from '../../content/skills.json';

export default function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="mt-14 scroll-mt-6 border-t border-border pt-7 sm:mt-16">
      <h2 id="skills-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">{skills.title}</h2>
      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        {skills.groups.map(({ id, title, items }) => (
          <section key={id} aria-labelledby={id}>
            <h3 id={id} className="border-b border-border pb-3 font-mono text-xs font-semibold uppercase tracking-wide text-primary">{title}</h3>
            <div className="divide-y divide-border">
              {items.map((skill) => (
                <SkillCategory key={skill.title} {...skill} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
} 