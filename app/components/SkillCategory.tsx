interface SkillCategoryProps {
  title: string;
  skills: { [key: string]: number | string[] };
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-fit">
      <h2 className="text-2xl font-bold mb-6 line-clamp-1">{title}</h2>
      <div className="space-y-4">
        {Object.entries(skills).map(([skill, value]) => (
          <div key={skill} className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300 line-clamp-1">{skill}</span>
            {typeof value === 'number' ? (
              <div className="flex items-center">
                <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mr-2">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${value * 10}%` }}
                  />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {value}/10
                </span>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2 justify-end">
                {value.map((item, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm line-clamp-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 