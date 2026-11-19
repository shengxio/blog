import SkillCategory from '../components/SkillCategory';
import skills from '../../content/skills.json';

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="mb-8 text-4xl font-bold">{skills.title}</h1>
      <div className="space-y-8">
        {skills.groups.map(({ id, title, items }) => (
          <section key={id} aria-labelledby={id}>
            <h2 id={id} className="mb-4 text-2xl font-bold">{title}</h2>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              {items.map((skill) => (
                <SkillCategory key={skill.title} {...skill} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
} 