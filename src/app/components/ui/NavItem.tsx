interface NavItemProps {
  title: string;
  url: string;
}

const NavItem = ({ title, url }: NavItemProps) => {
  return (
    <a href={url} className="group cursor-pointer">
      <li className="flex px-3 py-1.5 font-medium text-white transition-colors duration-300 group-hover:text-coral-400">
        {title}
      </li>
    </a>
  );
};

export default NavItem;
