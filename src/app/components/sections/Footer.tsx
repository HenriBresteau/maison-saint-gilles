const Footer = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <p className="text-xs text-slate-300">
        {new Date().getFullYear()} - &copy; Henri Bresteau
      </p>
    </div>
  );
};

export default Footer;
