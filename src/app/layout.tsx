import type { Metadata } from 'next';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import Script from 'next/script';
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

const SITE_URL = 'https://ovlasy.sk';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Starostlivosť o vlasy Most pri Bratislave | O VLASY by Zane',
    template: '%s | O VLASY by Zane',
  },
  description:
    'O vlasy sa staráme, nie iba o účes. Regeneračné kúry, hĺbkové čistenie vlasovej pokožky (Malibu C) a účesy na výnimočné udalosti v Moste pri Bratislave. Objednajte sa!',
  keywords: [
    'starostlivosť o vlasy Most pri Bratislave',
    'regeneračné kúry vlasy',
    'rekonštrukčné kúry vlasy',
    'hĺbkové čistenie vlasovej pokožky',
    'detoxikácia vlasov Malibu C',
    'keratínové ošetrenie vlasov',
    'svadobný účes Most pri Bratislave',
    'spoločenský účes Bratislava',
    'účes na stužkovú',
    'vlasový salón Most pri Bratislave',
    'vlasový salón Senec',
    'vlasový salón Bernolákovo',
    'O vlasy by Zane',
  ],
  authors: [{ name: 'O VLASY by Zane' }],
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
    url: SITE_URL,
    siteName: 'O VLASY by Zane',
    title: 'O VLASY by Zane — Starostlivosť o vlasy v Moste pri Bratislave',
    description:
      'O vlasy sa staráme, nie iba o účes. Regeneračné a rekonštrukčné kúry, hĺbkové čistenie vlasovej pokožky a účesy pre výnimočné udalosti. 10+ rokov skúseností.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'O VLASY by Zane — Starostlivosť o vlasy v Moste pri Bratislave',
      },
    ],
  },
  alternates: { canonical: SITE_URL },
  other: {
    'geo.region': 'SK-BL',
    'geo.placename': 'Most pri Bratislave',
    'geo.position': '48.1451;17.2896',
    ICBM: '48.1451, 17.2896',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HairSalon',
      '@id': `${SITE_URL}/#salon`,
      name: 'O VLASY by Zane',
      alternateName: 'Good Hair by Zane',
      image: `${SITE_URL}/og-image.jpg`,
      slogan: 'O vlasy sa staráme, nie iba o účes.',
      description:
        'Vlasový salón v Moste pri Bratislave zameraný na zdravie vlasov: rekonštrukčné a regeneračné kúry, hĺbkové čistenie vlasovej pokožky a vlasov (Malibu C) a účesy pre výnimočné udalosti — spoločenské, svadobné a na stužkovú.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Nové polia 2',
        addressLocality: 'Most pri Bratislave',
        postalCode: '900 46',
        addressRegion: 'Bratislavský kraj',
        addressCountry: 'SK',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 48.1451,
        longitude: 17.2896,
      },
      telephone: '+421944854229',
      email: 'goodhairbyzane@gmail.com',
      url: SITE_URL,
      sameAs: [
        'https://www.instagram.com/goodhairbyzane/',
        'https://www.facebook.com/people/Good-hair-by-zane/61585936526464/',
      ],
      priceRange: '€€',
      areaServed: [
        { '@type': 'City', name: 'Most pri Bratislave' },
        { '@type': 'City', name: 'Bratislava' },
        { '@type': 'City', name: 'Ivanka pri Dunaji' },
        { '@type': 'City', name: 'Senec' },
        { '@type': 'City', name: 'Bernolákovo' },
      ],
      founder: {
        '@type': 'Person',
        name: 'Zane',
        jobTitle: 'Vlasová špecialistka',
        worksFor: { '@id': `${SITE_URL}/#salon` },
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
            priceCurrency: 'EUR',
            price: '50',
            itemOffered: {
              '@type': 'Service',
              name: 'Hĺbková regeneračná kúra',
              description:
                'Intenzívna výživa pre suché, lámavé a namáhané vlasy. Vráti vlasom lesk, silu a vitalitu. Od 50 €.',
            },
          },
          {
            '@type': 'Offer',
            priceCurrency: 'EUR',
            price: '90',
            itemOffered: {
              '@type': 'Service',
              name: 'Prémiová rekonštrukčná kúra',
              description:
                'Hĺbková rekonštrukcia poškodených, farbených a chemicky ošetrených vlasov. Od 90 €.',
            },
          },
          {
            '@type': 'Offer',
            priceCurrency: 'EUR',
            price: '100',
            itemOffered: {
              '@type': 'Service',
              name: 'Keratínové ošetrenie',
              description:
                'Vyhladenie, lesk a ochrana vlasového vlákna keratínovým ošetrením. Od 100 €.',
            },
          },
          {
            '@type': 'Offer',
            priceCurrency: 'EUR',
            price: '50',
            itemOffered: {
              '@type': 'Service',
              name: 'Hĺbkové čistenie vlasovej pokožky a vlasov',
              description:
                'Detoxikačné ošetrenie Malibu C: odstráni minerály z tvrdej vody, chlór a nánosy stylingových produktov, zmierni podráždenie pokožky hlavy. Vegánske, bez sulfátov a parabénov. Od 50 €.',
            },
          },
          {
            '@type': 'Offer',
            priceCurrency: 'EUR',
            price: '60',
            itemOffered: {
              '@type': 'Service',
              name: 'Účesy pre výnimočné udalosti',
              description:
                'Spoločenské, svadobné účesy a účesy na stužkovú, ktoré vydržia celý večer. Od 60 €.',
            },
          },
          {
            '@type': 'Offer',
            priceCurrency: 'EUR',
            price: '30',
            itemOffered: {
              '@type': 'Service',
              name: 'Braids',
              description:
                'Vysoký cop (60 €), boxerské copíky (30 €) a cornrows (4 ks 40 €, 6 ks 60 €, 8 ks 80 €).',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'O VLASY by Zane',
      inLanguage: 'sk',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Domov',
          item: SITE_URL,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Čo je hĺbkové čistenie vlasovej pokožky a vlasov a komu pomôže?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Je to detoxikačné ošetrenie Malibu C, ktoré pomocou vitamínových kryštálov odstráni z vlasov a pokožky hlavy minerály z tvrdej vody, chlór a nánosy stylingových produktov. Pomôže, ak sú vlasy mdlé, ťažké, zle sa farbia alebo blond vlasy sťahujú do zelena, a tiež pri podráždenej, svrbivej pokožke či lupinách. Prípravky sú vegánske, bez sulfátov a parabénov. Cena je od 50 € podľa dĺžky a hustoty vlasov.',
          },
        },
        {
          '@type': 'Question',
          name: 'Koľko stojí regeneračná kúra v Moste pri Bratislave?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hĺbková regeneračná kúra stojí od 50 €, prémiová rekonštrukčná kúra od 90 € a keratínové ošetrenie od 100 €. Konečná cena závisí od dĺžky a hustoty vlasov. Na bezplatnej konzultácii zhodnotíme stav vašich vlasov a pripravíme presnú kalkuláciu.',
          },
        },
        {
          '@type': 'Question',
          name: 'Aký je rozdiel medzi regeneračnou kúrou a hĺbkovým čistením?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hĺbkové čistenie vlasy a pokožku najprv zbaví usadenín, ktoré bránia výžive preniknúť do vlasového vlákna. Regeneračná kúra následne dodá vlasom výživu, silu a lesk. Najlepší výsledok dosiahnete ich kombináciou: očistiť a potom regenerovať.',
          },
        },
        {
          '@type': 'Question',
          name: 'Robíte aj svadobné účesy a účesy na stužkovú?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Áno. Vytvárame spoločenské, svadobné a účesy na stužkovú aj na akúkoľvek inú výnimočnú udalosť, cena je od 60 €. Účes navrhneme podľa vašich šiat a typu vlasov tak, aby vydržal celý večer. Pred svadbou odporúčame skúšobný účes a termín si rezervovať s dostatočným predstihom.',
          },
        },
        {
          '@type': 'Question',
          name: 'Robíte aj predlžovanie vlasov?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Predlžovanie vlasov aktuálne neponúkame. V salóne O VLASY by Zane sa sústredíme na zdravie vlasov: regeneračné a rekonštrukčné kúry, hĺbkové čistenie vlasovej pokožky a vlasov a účesy pre výnimočné udalosti.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kde sa nachádza salón O VLASY by Zane?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Náš salón sa nachádza na adrese Nové polia 2, 900 46 Most pri Bratislave. Sme len pár minút od Bratislavy a ľahko dostupní aj z Ivanky pri Dunaji, Dunajskej Lužnej a Senca. Parkovanie je priamo pred salónom.',
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
        <link rel="icon" href="/favicon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Script
          src="https://www.mdntech.org/widget.js"
          data-chatbot-id="60b63ca6-a231-4812-9288-3f6b776edbd8"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
