import Image from 'next/image';
import Link from 'next/link';
import portrait from '../../content/images/portrait.png';
import { navigation, profile } from '../../content/site.json';

export default function Sidebar() {
  return (
    <aside className="w-full bg-white p-4 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 md:fixed md:left-0 md:top-0 md:h-screen md:w-64 md:overflow-y-auto md:border-b-0 md:border-r md:p-6">
      <div className="mb-4 flex items-center gap-3 md:mb-8 md:flex-col md:gap-0">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full md:mb-4 md:h-32 md:w-32">
          <Image
            src={portrait}
            alt={profile.portraitAlt}
            fill
            sizes="(min-width: 768px) 128px, 56px"
            className="object-cover"
            priority
          />
        </div>
        <div className="min-w-0 md:text-center">
          <h2 className="text-base font-bold md:text-xl">{profile.name}</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 md:text-sm">
            {profile.tagline}
          </p>
        </div>
      </div>

      <nav className="grid grid-cols-3 gap-1 md:block md:space-y-2">
        {navigation.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="block rounded-lg px-2 py-2 text-center text-sm hover:bg-gray-100 dark:hover:bg-gray-700 md:px-4 md:text-left md:text-base"
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
} 