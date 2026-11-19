interface ProjectCardProps {
  title: string;
  kind: string;
  description: string;
  tags: string[];
  sourceUrl?: string;
  sourceLinkLabel: string;
}

export default function ProjectCard({ title, kind, description, tags, sourceUrl, sourceLinkLabel }: ProjectCardProps) {
  return (
    <article className="py-4 first:pt-2 last:pb-0">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
        <h4 className="text-lg font-semibold leading-tight">{title}</h4>
        <p className="text-xs text-muted-foreground">{kind}</p>
      </div>
      <p className="mt-1.5 leading-relaxed text-muted-foreground">{description}</p>
      <ul role="list" className="mt-2 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <li key={tag} className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground">
            {tag}
          </li>
        ))}
      </ul>
      {sourceUrl && (
        <a
          href={sourceUrl}
          aria-label={`${sourceLinkLabel}: ${title}`}
          className="mt-2 inline-flex items-center gap-1.5 text-sm text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
        >
          {sourceLinkLabel}<span aria-hidden="true">&#8599;</span>
        </a>
      )}
    </article>
  );
}
