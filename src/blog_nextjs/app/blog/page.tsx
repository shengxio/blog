'use client';

import { useState, useMemo } from 'react';
import BlogPost from '../components/BlogPost';
import Filter from '../components/Filter';
import posts from '../../content/posts.json';

export default function BlogPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extract unique categories and tags
  const categories = useMemo(() => {
    const allCategories = new Set<string>();
    Object.keys(posts).forEach(category => allCategories.add(category));
    return Array.from(allCategories);
  }, []);

  const tags = useMemo(() => {
    const allTags = new Set<string>();
    Object.values(posts).forEach(categoryPosts => {
      categoryPosts.forEach(post => {
        post.tags.forEach(tag => allTags.add(tag));
      });
    });
    return Array.from(allTags);
  }, []);

  // Filter posts based on selected categories and tags
  const filteredPosts = useMemo(() => {
    let result: typeof posts.self = [];
    
    // If no categories selected, show all posts
    if (selectedCategories.length === 0) {
      Object.values(posts).forEach(categoryPosts => {
        result = [...result, ...categoryPosts];
      });
    } else {
      // Show posts from selected categories
      selectedCategories.forEach(category => {
        if (posts[category as keyof typeof posts]) {
          result = [...result, ...posts[category as keyof typeof posts]];
        }
      });
    }

    // Filter by tags if any are selected
    if (selectedTags.length > 0) {
      result = result.filter(post =>
        selectedTags.some(tag => post.tags.includes(tag))
      );
    }

    return result;
  }, [selectedCategories, selectedTags]);

  const handleFilterChange = (categories: string[], tags: string[]) => {
    setSelectedCategories(categories);
    setSelectedTags(tags);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Filter
            categories={categories}
            tags={tags}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="md:col-span-3">
          <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
          <div className="space-y-6">
            {filteredPosts.map((post, index) => (
              <BlogPost
                key={index}
                title={post.title}
                date={post.date}
                preview={post.preview}
                tags={post.tags}
                read_time={post.read_time}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 