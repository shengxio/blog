import ProjectCard from '../components/ProjectCard';
import projects from '../../content/projects.json';

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="mb-8 text-4xl font-bold">{projects.title}</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.items.map((project) => (
          <ProjectCard key={project.title} {...project} sourceLinkLabel={projects.sourceLinkLabel} />
        ))}
      </div>
    </div>
  );
}
