import Image from 'next/image';

import NavItem from '@/app/components/ui/NavItem';

const Header = () => {
  return (
    <header>
      <nav className="container flex items-center justify-between px-4 py-4 mx-auto ">
        <div className="flex items-center gap-2">
          <Image
            src="/icon.svg"
            alt="Icon Maison Saint-gilles"
            width={48}
            height={48}
            className=""
          />
          <h1 className="text-2xl font-medium tracking-tighter font-monsterrat">
            Maison Saint-Gilles
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-4">
            <NavItem title="Accueil" url="/" />
            <NavItem title="La Maison" url="/" />
            <NavItem title="Loclisation" url="/" />
            <NavItem title="Contact" url="/" />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
