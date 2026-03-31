import type { Metadata } from 'next';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://goodhairbyzane.com'),
  title: {
    default: 'Predlžovanie vlasov Ivanka pri Dunaji | Good Hair by Zane',
    template: '%s | Good Hair by Zane',
  },
  description:
    'Predlžovanie vlasov a rekonštrukčné kúry v Ivanke pri Dunaji. 10+ rokov skúseností, 150+ klientok. Keratín, micro-ring, nano-ring, mikrokapsule. Objednajte sa!',
  keywords: [
    'predlžovanie vlasov Ivanka pri Dunaji',
    'rekonštrukčné kúry vlasy',
    'regeneračné kúry vlasy',
    'predlžovanie vlasov Bratislava',
    'zahusťovanie vlasov',
    'keratínové predlžovanie vlasov',
    'nano-ring predlžovanie',
    'mikrokapsule predlžovanie vlasov',
    'micro-ring predlžovanie',
    'vlasový salón Senec',
    'vlasový salón Bernolákovo',
    'predlžovanie vlasov cena',
  ],
  authors: [{ name: 'Good Hair by Zane' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'sk_SK',
    url: 'https://goodhairbyzane.com',
    siteName: 'Good Hair by Zane',
    title: 'Good Hair by Zane — Predlžovanie vlasov Ivanka pri Dunaji',
    description:
      'Luxusný vlasový salón špecializujúci sa na profesionálne predlžovanie vlasov a regeneračné kúry. 10+ rokov skúseností, 150+ spokojných klientok.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Good Hair by Zane — Predlžovanie vlasov v Ivanke pri Dunaji',
      },
    ],
  },
  alternates: { canonical: 'https://goodhairbyzane.com' },
  other: {
    'geo.region': 'SK-BL',
    'geo.placename': 'Ivanka pri Dunaji',
    'geo.position': '48.1874;17.2574',
    ICBM: '48.1874, 17.2574',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HairSalon',
      '@id': 'https://goodhairbyzane.com/#salon',
      name: 'Good Hair by Zane',
      image: 'https://goodhairbyzane.com/og-image.jpg',
      description:
        'Luxusný vlasový salón v Ivanke pri Dunaji špecializujúci sa na profesionálne predlžovanie vlasov a rekonštrukčné regeneračné kúry. Keratínové, micro-ring, nano-ring a mikrokapsulové metódy s použitím 100% ľudských vlasov.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cintorínska 272/1',
        addressLocality: 'Ivanka pri Dunaji',
        postalCode: '900 28',
        addressRegion: 'Bratislavský kraj',
        addressCountry: 'SK',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 48.1874,
        longitude: 17.2574,
      },
      telephone: '+421944854229',
      email: 'goodhairbyzane@gmail.com',
      url: 'https://goodhairbyzane.com',
      sameAs: [
        'https://www.instagram.com/goodhairbyzane/',
        'https://www.facebook.com/people/Good-hair-by-zane/61585936526464/',
      ],
      priceRange: '€€',
      areaServed: [
        { '@type': 'City', name: 'Ivanka pri Dunaji' },
        { '@type': 'City', name: 'Bratislava' },
        { '@type': 'City', name: 'Senec' },
        { '@type': 'City', name: 'Bernolákovo' },
        { '@type': 'City', name: 'Most pri Bratislave' },
      ],
      founder: {
        '@type': 'Person',
        name: 'Zane',
        jobTitle: 'Vlasová špecialistka',
        worksFor: { '@id': 'https://goodhairbyzane.com/#salon' },
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '150',
        bestRating: '5',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Služby salónu',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Keratínové predlžovanie vlasov',
              description:
                'Profesionálne predlžovanie vlasov keratínovou metódou s 100% ľudskými vlasmi. Najtrvácnejší spoj, výdrž 4–6 mesiacov.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Nano-ring predlžovanie vlasov',
              description:
                'Predlžovanie vlasov s najmenšími spojmi pre maximálnu diskrétnosť. Bez tepla a lepidla.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mikrokapsulové predlžovanie vlasov',
              description:
                'Revolučná technika s neviditeľnými spojmi. Mikrokapsule sa aplikujú na jednotlivé vlasy pre dokonale prirodzený výsledok.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Micro-ring predlžovanie vlasov',
              description:
                'Predlžovanie bez tepla a lepidla pomocou mikro krúžkov. Najšetrnejšia metóda k vlastným vlasom.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Rekonštrukčné a regeneračné kúry',
              description:
                'Prémiové regeneračné kúry pre obnovu zdravia a vitality vlasov. Keratínové ošetrenie, hĺbková regenerácia.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://goodhairbyzane.com/#website',
      url: 'https://goodhairbyzane.com',
      name: 'Good Hair by Zane',
      inLanguage: 'sk',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://goodhairbyzane.com/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Domov',
          item: 'https://goodhairbyzane.com',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://goodhairbyzane.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Koľko stojí predlžovanie vlasov v Ivanke pri Dunaji?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cena predlžovania vlasov závisí od zvolenej metódy, počtu prameňov a požadovanej dĺžky. Keratínové predlžovanie začína od 350 €, micro-ring od 300 € a nano-ring od 320 €. Ponúkame bezplatnú konzultáciu s presnou cenovou kalkuláciou na mieru.',
          },
        },
        {
          '@type': 'Question',
          name: 'Aké metódy predlžovania vlasov ponúkate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ponúkame štyri overené metódy: keratínové predlžovanie (najtrvácnejší spoj, 4–6 mesiacov), micro-ring (bez tepla a lepidla), nano-ring (najmenšie spoje, maximálna diskrétnosť) a mikrokapsule (neviditeľné spoje, revolúcia v predlžovaní). Všetky metódy používajú 100% ľudské vlasy najvyššej kvality.',
          },
        },
        {
          '@type': 'Question',
          name: 'Ako dlho vydržia predĺžené vlasy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Predĺžené vlasy vydržia 3 až 6 mesiacov pri správnej starostlivosti v závislosti od metódy a rastu vlastných vlasov. Keratínové spoje vydržia najdlhšie (4–6 mesiacov), micro-ring a nano-ring 3–5 mesiacov. Po odrastení je možné pramene opätovne pripojiť.',
          },
        },
        {
          '@type': 'Question',
          name: 'Poškodí predlžovanie moje vlastné vlasy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nie, pri správnej aplikácii a dodržaní starostlivosti predlžovanie vlasy nepoškodzuje. Používame šetrné metódy a kvalitné materiály. Na bezplatnej konzultácii zhodnotíme stav vašich vlasov a odporučíme najvhodnejšiu metódu pre váš typ vlasov.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kde sa nachádza salón Good Hair by Zane?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Náš salón sa nachádza na adrese Cintorínska 272/1, 900 28 Ivanka pri Dunaji. Sme len 15 minút autom z centra Bratislavy a ľahko dostupní aj z obcí Bernolákovo, Most pri Bratislave a Senec. Parkovanie je priamo pred salónom.',
          },
        },
        {
          '@type': 'Question',
          name: 'Musím sa objednať vopred?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Áno, pracujeme výlučne na objednávku, aby sme vám mohli venovať plnú pozornosť a pripraviť všetko potrebné. Zavolajte nám na +421 944 854 229 alebo napíšte na goodhairbyzane@gmail.com.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk" className={`${cormorant.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/zane_favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/zane_favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
