import Image from 'next/image';
import portrait from '../../content/images/portrait.png';
import { navigation, profile } from '../../content/site.json';

export default function Sidebar() {
  return (
    <aside className="border-b border-border px-5 py-5 sm:px-8 md:sticky md:top-0 md:max-h-screen md:min-h-screen md:self-start md:overflow-y-auto md:border-b-0 md:border-r md:px-6 md:py-12">
      <div className="mb-4 flex items-center gap-3 md:mb-10 md:flex-col md:items-start md:gap-4">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-border bg-card md:h-[4.5rem] md:w-[4.5rem]">
          <Image
            src={portrait}
            alt={profile.portraitAlt}
            fill
            sizes="(min-width: 768px) 72px, 44px"
            className="object-cover"
            priority
          />
        </div>
        <div className="min-w-0">
          <p className="text-base font-semibold leading-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {profile.tagline}
          </p>
        </div>
      </div>

      <nav aria-labelledby="contents-heading">
        <p id="contents-heading" className="sr-only mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground md:not-sr-only">
          {navigation.title}
        </p>
        <ul role="list" className="flex flex-wrap gap-x-4 gap-y-1 md:flex-col md:gap-1">
          {navigation.items.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="inline-block py-1 text-sm text-muted-foreground hover:text-primary hover:underline md:py-1.5"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
} 