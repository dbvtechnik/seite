import { Lightbulb, Volume2, Music, Settings, Truck, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Lichttechnik',
    description:
      'Stimmungsvolle Lichtkonzepte mit Moving Heads, LED-Pars, Traversen und Effektmaschinen. DMX-gesteuert für perfekte Szenen – von Gala bis Party.',
    tags: ['Moving Heads', 'LED-Pars', 'Traversen', 'DMX-Steuerung'],
  },
  {
    icon: Volume2,
    title: 'Tontechnik',
    description:
      'Kraftvolle Beschallung für jede Raumgröße. Mischpulte, Mikrofone und Bühnenmonitore für kristallklaren Sound – von der Rede bis zur Live-Band.',
    tags: ['L-Acoustics', 'Digitalmixer', 'Mikrofone', 'Bühnenmonitore'],
  },
  {
    icon: Music,
    title: 'DJ Service',
    description:
      'Erfahrene DJs mit breitem Musikspektrum – von Charts über Classics bis Spezialgenres. Wunschtitel im Vorfeld willkommen, Technik inklusive.',
    tags: ['Top 100', '80er/90er', 'Black/Schlager', 'Open Format'],
  },
  {
    icon: Settings,
    title: 'Eventplanung',
    description:
      'Persönliche Beratung und technische Vorabstimmung. Wir planen Ablauf, Timing und Technik im Detail mit Ihnen – inkl. Vor-Ort-Besichtigung.',
    tags: ['Beratung', 'Ablaufplan', 'Vorabstimmung', 'Besichtigung'],
  },
  {
    icon: Truck,
    title: 'Logistik & Aufbau',
    description:
      'Lieferung, Auf- und Abbau inklusive. Wir kümmern uns um alles Technische, damit Sie sich um Ihre Gäste kümmern können.',
    tags: ['Anlieferung', 'Aufbau', 'Abbau', '24h-Service'],
  },
  {
    icon: ShieldCheck,
    title: 'Zuverlässigkeit',
    description:
      'Pünktlich, professionell und mit Backup-Equipment. Ihr Event ist in sicheren Händen – von der ersten Minute bis zur letzten Platte.',
    tags: ['Backup-Gear', 'Versichert', 'Pünktlich', 'Erfahren'],
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Veranstaltungstechnik
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">
            Technik, die Ihr Event
            <br />
            <span className="text-gradient">zum Erlebnis macht.</span>
          </h2>
          <p className="mt-5 text-ink-300 text-lg leading-relaxed">
            Von der ersten Skizze bis zum letzten Akkord: Licht, Ton, DJ und Logistik
            aus einer Hand – perfekt aufeinander abgestimmt.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative glass rounded-2xl p-8 hover:border-accent-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/0 to-accent-500/0 group-hover:from-accent-500/5 group-hover:to-transparent transition-all duration-500" />
              <div className="relative">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-ink-700 group-hover:bg-accent-400 transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-accent-400 group-hover:text-ink-950 transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-ink-300 leading-relaxed text-sm">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-ink-700/60 px-3 py-1 text-xs text-ink-200 group-hover:bg-accent-400/10 group-hover:text-accent-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
