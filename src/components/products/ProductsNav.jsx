import { useEffect, useState } from 'react';

const navItems = [
  { id: 'ecosystem', label: 'Ecosystem' },
  { id: 'energy', label: 'Renewable Energy' },
  { id: 'carbon', label: 'Carbon Products' },
  { id: 'advanced', label: 'Advanced Materials' },
  { id: 'process', label: 'Technology' },
];

export default function ProductsNav() {
  const [active, setActive] = useState('ecosystem');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if sticky
      setIsSticky(window.scrollY > window.innerHeight * 0.8);

      // Spy on sections
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 150; // offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActive(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`w-full z-40 transition-all duration-300 ${isSticky ? 'fixed top-[88px] bg-background/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-ambient' : 'absolute bottom-0 left-0 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex items-center gap-6 overflow-x-auto no-scrollbar py-4">
          {navItems.map(item => (
            <li key={item.id} className="shrink-0">
              <button
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-heading tracking-wide transition-all duration-300 ${active === item.id ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-primary'}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
