interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
}

export default function ProjectCard({ title, description, image, tags }: ProjectCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {image && (
        <div className="relative h-48 w-full">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
} 