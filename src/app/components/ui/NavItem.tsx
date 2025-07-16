interface NavItemProps {
  title: string;
  url: string;
}

const NavItem = ({ title, url }: NavItemProps) => {
  return (
    <a href={url} className="group cursor-pointer">
      <li className="flex px-2 py-1.5 font-monsterrat font-medium text-navy-900 transition-colors duration-300 group-hover:text-coral-400 lg:px-3">
        {title}
      </li>
    </a>
  );
};

export default NavItem;
