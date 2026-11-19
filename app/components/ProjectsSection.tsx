import ProjectCard from './ProjectCard';
import projects from '../../content/projects.json';

export default function ProjectsSection() {
  const groupedProjects = new Map<string, typeof projects.items>();
  for (const project of projects.items) {
    const group = groupedProjects.get(project.category);
    if (group) {
      group.push(project);
    } else {
      groupedProjects.set(project.category, [project]);
    }
  }

  return (
    <section id="projects" aria-labelledby="projects-heading" className="mt-14 scroll-mt-6 sm:mt-16">
      <h2 id="projects-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">{projects.title}</h2>
      <p className="mt-3 max-w-prose leading-relaxed text-muted-foreground">{projects.intro}</p>
      <div className="mt-7 space-y-8">
        {Array.from(groupedProjects, ([category, items]) => (
          <div key={category} className="border-t border-border pt-3 lg:grid lg:grid-cols-[8rem_minmax(0,1fr)] lg:gap-6">
            <h3 className="py-2 font-mono text-xs font-semibold uppercase tracking-wide text-primary">{category}</h3>
            <div className="divide-y divide-border">
              {items.map((project) => (
                <ProjectCard key={project.title} {...project} sourceLinkLabel={projects.sourceLinkLabel} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
