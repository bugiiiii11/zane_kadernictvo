'use client';

export default function Footer() {
  return (
    <footer className="bg-charcoal py-6 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-[0.75rem] text-cream/35">
        <span>
          &copy; {new Date().getFullYear()} Good Hair by Zane — Vlasový salón,
          Ivanka pri Dunaji
        </span>
        <span>
          Cintorínska 272/1, 900 28 Ivanka pri Dunaji |{' '}
          <a
            href="tel:+421944854229"
            className="text-cream/55 hover:text-gold transition-colors"
          >
            +421 944 854 229
          </a>
        </span>
      </div>
    </footer>
  );
}
