interface SkillCategoryProps {
  title: string;
  description: string;
  example?: { label: string; url: string };
}

export default function SkillCategory({ title, description, example }: SkillCategoryProps) {
  return (
    <section className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
      {example && (
        <a
          href={example.url}
          className="mt-3 inline-block text-blue-700 underline dark:text-blue-300"
        >
          {example.label}
        </a>
      )}
    </section>
  );
}
