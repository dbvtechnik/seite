import { ArrowRight, Play, Star, Volume2, Lightbulb, Waves } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-accent-500/20 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-accent-500/10 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-7xl px-6 py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-8 animate-fade-up">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-ink-200">Jetzt buchbar für 2026</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              Eventtechnik
              <br />
              <span className="text-gradient">& DJ Service</span>
              <br />
              der begeistert.
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-ink-300 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              Professionelle Licht- und Tontechnik, erfahrene DJs und ein Full-Service-Paket
              für Ihre Veranstaltung. Vom Konzept über Aufbau bis zur letzten Platte –
              wir liefern die Technik, die Ihr Event unvergesslich macht.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <a
                href="#pakete"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-400 px-7 py-3.5 text-base font-semibold text-ink-950 hover:bg-accent-300 transition-all glow-accent hover:scale-105"
              >
                Pakete entdecken
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#galerie"
                className="group inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-base font-semibold text-white hover:bg-ink-700 transition-all"
              >
                <Play className="h-4 w-4 fill-current" />
                Galerie ansehen
              </a>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-8 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent-500 text-accent-500" />
                  ))}
                </div>
                <span className="text-sm text-ink-300">20+ erfolgreiche Events</span>
              </div>
              <div className="h-8 w-px bg-ink-600" />
              <div className="text-sm text-ink-300">
                <span className="text-white font-semibold">Filderstadt</span> & Stuttgart
              </div>
              <div className="h-8 w-px bg-ink-600" />
              <div className="text-sm text-ink-300">
                <span className="text-white font-semibold">24/7</span> Support
              </div>
            </div>
          </div>

          {/* Logo & tech highlights */}
          <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: '0.35s', opacity: 0 }}>
            <div className="relative flex flex-col items-center">
              <div className="absolute inset-0 -m-8 rounded-full bg-accent-500/10 blur-[100px]" />
              <img
                src="/image.png"
                alt="DBV Veranstaltungstechnik"
                className="relative h-48 w-auto [mix-blend-mode:screen] drop-shadow-[0_0_40px_rgba(227,6,19,0.25)]"
              />
              <div className="relative mt-10 grid grid-cols-3 gap-3 w-full max-w-sm">
                <div className="glass rounded-xl p-4 text-center">
                  <Lightbulb className="mx-auto h-6 w-6 text-accent-400 mb-2" />
                  <span className="text-xs font-medium text-ink-200">Lichttechnik</span>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <Volume2 className="mx-auto h-6 w-6 text-accent-400 mb-2" />
                  <span className="text-xs font-medium text-ink-200">Tontechnik</span>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <Waves className="mx-auto h-6 w-6 text-accent-400 mb-2" />
                  <span className="text-xs font-medium text-ink-200">DJ Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink-950 to-transparent" />
    </section>
  );
}
