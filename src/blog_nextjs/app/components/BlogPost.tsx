interface BlogPostProps {
  title: string;
  date: string;
  preview: string;
  description?: string;
  tags: string[];
  read_time: string;
}

export default function BlogPost({ title, date, preview, description, tags, read_time }: BlogPostProps) {
  return (
    <article className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
        <time>{date}</time>
        <span className="mx-2">•</span>
        <span>{read_time}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{preview}</p>
      {description && (
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      )}
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
    </article>
  );
} 