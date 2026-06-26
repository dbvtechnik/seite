import { Check, Sparkles, Music, Lightbulb, Sun, Headphones, Disc3 } from 'lucide-react';
import { packages, type PackageId } from '../data';

const iconMap: Record<string, typeof Sparkles> = {
  Sparkles,
  Music,
  Lightbulb,
  Sun,
  Headphones,
  Disc3,
};

interface Props {
  selectedPackage: PackageId | null;
  onSelectPackage: (id: PackageId) => void;
}

export default function Packages({ selectedPackage, onSelectPackage }: Props) {
  return (
    <section id="pakete" className="relative py-28">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent-500/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Unsere Pakete
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">
            Wählen Sie Ihr
            <span className="text-gradient"> Paket</span>
          </h2>
          <p className="mt-5 text-ink-300 text-lg">
            Sechs Pakete für jeden Anlass und jedes Budget. Klicken Sie ein Paket an,
            um es im Kontaktformular vorzuwählen.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => {
            const Icon = iconMap[pkg.icon] ?? Sparkles;
            const isSelected = selectedPackage === pkg.id;
            return (
              <div
                key={pkg.id}
                onClick={() => onSelectPackage(pkg.id)}
                className={`group relative cursor-pointer rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                  pkg.highlighted
                    ? 'glass-strong border-accent-400/40 glow-accent'
                    : 'glass hover:border-white/10'
                } ${isSelected ? 'ring-2 ring-accent-400 scale-[1.02]' : ''}`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink-950">
                    {pkg.badge}
                  </div>
                )}

                {isSelected && (
                  <div className="absolute -top-3 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-accent-400 text-ink-950">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </div>
                )}

                <div className="relative">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-ink-700 group-hover:bg-accent-400 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-accent-400 group-hover:text-ink-950 transition-colors duration-300" />
                  </div>

                  <h3 className="font-display text-2xl font-bold">{pkg.name}</h3>
                  <p className="mt-1 text-sm text-accent-400 font-medium">{pkg.tagline}</p>
                  <p className="mt-4 text-sm text-ink-300 leading-relaxed">{pkg.description}</p>

                  <ul className="mt-6 space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-ink-200">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-400" strokeWidth={2.5} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`mt-8 w-full rounded-full py-3 text-sm font-semibold transition-all ${
                      isSelected
                        ? 'bg-accent-400 text-ink-950'
                        : 'glass-strong text-white hover:bg-ink-700'
                    }`}
                  >
                    {isSelected ? 'Ausgewählt' : 'Paket wählen'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
