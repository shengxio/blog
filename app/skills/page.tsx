import SkillCategory from '../components/SkillCategory';
import CloudServices from '../components/CloudServices';
import skills from '../../content/skills.json';

export default function SkillsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Skills & Expertise</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillCategory title="Roles & Responsibilities" skills={skills.roles} />
        <SkillCategory title="Programming Languages" skills={skills.programming} />
        <SkillCategory title="Libraries & Frameworks" skills={skills.libraries} />
        <SkillCategory title="Tools & Technologies" skills={skills.tools} />
      </div>
      <div className="mt-8">
        <CloudServices platforms={skills.deployments} />
      </div>
    </div>
  );
} 