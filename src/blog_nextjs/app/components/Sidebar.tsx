import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-white dark:bg-gray-800 p-6 border-r border-gray-200 dark:border-gray-700">
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden">
          <Image
            src="/portrait.png"
            alt="Sheng Xiong Ding"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h2 className="text-xl font-bold">Sheng Xiong Ding (Roland)</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
          Data Scientist | AI & ML Specialist | Solutions Architect
        </p>
      </div>

      <nav className="space-y-2">
        <Link 
          href="/"
          className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Home
        </Link>
        <Link 
          href="/blog"
          className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Blog
        </Link>
        <Link 
          href="/projects"
          className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Projects
        </Link>
        <Link 
          href="/skills"
          className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Skills
        </Link>
      </nav>
    </aside>
  );
} 