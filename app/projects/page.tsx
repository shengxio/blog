'use client';

import { useState, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import Filter from '../components/Filter';
import projects from '../../content/projects.json';

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extract unique tags from all projects
  const tags = useMemo(() => {
    const allTags = new Set<string>();
    projects.forEach(project => {
      project.tags.forEach(tag => allTags.add(tag));
    });
    return Array.from(allTags);
  }, []);

  // Filter projects based on selected tags
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) {
      return projects;
    }
    return projects.filter(project =>
      selectedTags.some(tag => project.tags.includes(tag))
    );
  }, [selectedTags]);

  const handleFilterChange = (_: string[], tags: string[]) => {
    setSelectedTags(tags);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Filter
            categories={[]}
            tags={tags}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="md:col-span-3">
          <h1 className="text-4xl font-bold mb-8">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 