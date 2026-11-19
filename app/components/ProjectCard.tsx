interface ProjectCardProps {
  title: string;
  category: string;
  kind: string;
  description: string;
  sourceUrl?: string;
  sourceLinkLabel: string;
}

export default function ProjectCard({ title, category, kind, description, sourceUrl, sourceLinkLabel }: ProjectCardProps) {
  return (
    <article className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
      <h2 className="mb-2 text-2xl font-bold">{title}</h2>
      <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
        {category} <span aria-hidden="true">/</span> {kind}
      </p>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
      {sourceUrl && (
        <a
          href={sourceUrl}
          aria-label={`${sourceLinkLabel}: ${title}`}
          className="mt-3 inline-block text-blue-700 underline dark:text-blue-300"
        >
          {sourceLinkLabel}
        </a>
      )}
    </article>
  );
}
