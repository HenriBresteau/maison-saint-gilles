import Image from 'next/image';
import Link from 'next/link';

import NavItem from '@/app/components/ui/NavItem';

const navigationItems = [
  { title: "Accueil", url: "/" },
  { title: "La Maison", url: "/la-maison" },
  { title: "Localisation", url: "/localisation" },
  { title: "Contact", url: "/contact" },
] as const;

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src="/icon.svg"
            alt="Icon Maison Saint-gilles"
            width={48}
            height={48}
            className=""
          />
          <h1 className="font-monsterrat text-xl font-semibold tracking-tight text-navy-900 md:text-2xl">
            Maison Saint-Gilles
          </h1>
        </Link>

        <div className="hidden items-center md:flex">
          <ul className="flex items-center gap-4 lg:gap-8">
            {navigationItems.map((item) => (
              <NavItem key={item.url} title={item.title} url={item.url} />
            ))}
          </ul>
        </div>
        <button className="p-2 text-navy-900 md:hidden">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
