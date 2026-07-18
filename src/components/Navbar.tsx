import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Pakete', href: '#pakete' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Über uns', href: '#ueber' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong py-3' : 'py-5 bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src="/image.png"
            alt="DBV Veranstaltungstechnik Logo"
            className="h-16 w-auto transition-transform duration-300 group-hover:scale-105 [mix-blend-mode:screen]"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-300 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#kontakt"
            className="rounded-full bg-accent-400 px-5 py-2 text-sm font-semibold text-ink-950 hover:bg-accent-300 transition-colors glow-accent"
          >
            Anfragen
          </a>
        </div>

        <button
          className="text-ink-200 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass-strong mt-3 mx-4 rounded-2xl p-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink-200 hover:text-accent-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent-400 px-5 py-2.5 text-center text-sm font-semibold text-ink-950"
            >
              Anfragen
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
