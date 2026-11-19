interface SkillCategoryProps {
  title: string;
  description: string;
  example?: { label: string; url: string };
}

export default function SkillCategory({ title, description, example }: SkillCategoryProps) {
  return (
    <section className="py-4 last:pb-0">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      {example && (
        <a
          href={example.url}
          className="mt-1.5 inline-block text-sm text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
        >
          {example.label}
        </a>
      )}
    </section>
  );
}
