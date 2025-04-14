'use client';

import { useState } from 'react';

interface FilterProps {
  categories: string[];
  tags: string[];
  onFilterChange: (selectedCategories: string[], selectedTags: string[]) => void;
}

export default function Filter({ categories, tags, onFilterChange }: FilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newCategories);
    onFilterChange(newCategories, selectedTags);
  };

  const handleTagChange = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newTags);
    onFilterChange(selectedCategories, newTags);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedCategories.includes(category)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagChange(tag)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedTags.includes(tag)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 