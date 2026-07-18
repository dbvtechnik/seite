import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-700 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="#top" className="flex items-center gap-3 group">
            <img
              src="/image.png"
              alt="DBV Veranstaltungstechnik Logo"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <div className="flex items-center gap-6">
            <a href="#" className="text-ink-300 hover:text-accent-400 transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-ink-300 hover:text-accent-400 transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="mailto:info@dbv-veranstaltungstechnik.de" className="text-ink-300 hover:text-accent-400 transition-colors" aria-label="E-Mail">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-ink-400">
            &copy; {new Date().getFullYear()} DBV Veranstaltungstechnik. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
