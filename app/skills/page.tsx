import SkillCategory from '../components/SkillCategory';
import skills from '../../content/skills.json';

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="mb-8 text-4xl font-bold">Skills</h1>
      <section aria-labelledby="software-skills">
        <h2 id="software-skills" className="mb-4 text-2xl font-bold">Software and data</h2>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {skills.software.map((skill) => (
            <SkillCategory key={skill.title} {...skill} />
          ))}
        </div>
      </section>
      <section aria-labelledby="engineering-skills" className="mt-8">
        <h2 id="engineering-skills" className="mb-4 text-2xl font-bold">Industrial and electrical engineering</h2>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {skills.engineering.map((skill) => (
            <SkillCategory key={skill.title} {...skill} />
          ))}
        </div>
      </section>
    </div>
  );
} 