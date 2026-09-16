import type { Metadata, Viewport } from 'next';
import { faqs } from '@/content/faqs';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500'],
  variable: '--font-outfit',
  display: 'swap',
});

const SITE_URL = 'https://ovlasy.sk';

export const viewport: Viewport = {
  themeColor: '#2C2622',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Starostlivosť o vlasy Most pri Bratislave | O VLASY by Zane',
    template: '%s | O VLASY by Zane',
  },
  description:
    'Starostlivosť o vlasy v Moste pri Bratislave. Regeneračné kúry, hĺbkové čistenie vlasovej pokožky a účesy na výnimočné udalosti. Objednajte sa.',
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
      'O vlasy sa staráme, nie iba o účes. Regeneračné a rekonštrukčné kúry, hĺbkové čistenie vlasovej pokožky (Malibu C) a účesy pre výnimočné udalosti v Moste pri Bratislave.',
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

const AREA_SERVED = [
  { '@type': 'City', name: 'Most pri Bratislave' },
  { '@type': 'City', name: 'Bratislava' },
  { '@type': 'City', name: 'Ivanka pri Dunaji' },
  { '@type': 'City', name: 'Senec' },
  { '@type': 'City', name: 'Dunajská Lužná' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    /* ---------------------------------------------------------------- SALON */
    {
      '@type': 'HairSalon',
      '@id': `${SITE_URL}/#salon`,
      name: 'O VLASY by Zane',
      alternateName: 'Good Hair by Zane',
      slogan: 'O vlasy sa staráme, nie iba o účes.',
      description:
        'Vlasový salón v Moste pri Bratislave zameraný na zdravie vlasov: rekonštrukčné a regeneračné kúry, hĺbkové čistenie vlasovej pokožky a vlasov (Malibu C) a účesy pre výnimočné udalosti — spoločenské, svadobné a na stužkovú. Pracujeme výlučne na objednávku, v sobotu iba po dohode termínu.',
      url: `${SITE_URL}/`,
      logo: {
        '@type': 'ImageObject',
        '@id': `${SITE_URL}/#logo`,
        url: `${SITE_URL}/logo-ovlasy.webp`,
        contentUrl: `${SITE_URL}/logo-ovlasy.webp`,
        width: 895,
        height: 276,
        caption: 'O VLASY by Zane',
      },
      image: [
        `${SITE_URL}/priestory/DSC_3369-HDR.webp`,
        `${SITE_URL}/vysledky/ovlasy2.webp`,
        `${SITE_URL}/vysledky/IMG_8590.webp`,
        `${SITE_URL}/produkty/DSC_3592-HDR.webp`,
      ],
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
      hasMap:
        'https://maps.google.com/maps?q=Nov%C3%A9%20polia%202%2C%20900%2046%20Most%20pri%20Bratislave',
      telephone: '+421950249838',
      email: 'ovlasy.sk@gmail.com',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Objednávky a rezervácie',
        telephone: '+421950249838',
        email: 'ovlasy.sk@gmail.com',
        availableLanguage: {
          '@type': 'Language',
          name: 'Slovak',
          alternateName: 'sk',
        },
        areaServed: 'SK',
      },
      legalName: 'Žaneta Lábska',
      taxID: '1074439806',
      identifier: {
        '@type': 'PropertyValue',
        name: 'IČO',
        propertyID: 'IČO',
        value: '57399760',
      },
      sameAs: [
        'https://www.instagram.com/goodhairbyzane/',
        'https://www.facebook.com/people/Good-hair-by-zane/61585936526464/',
      ],
      priceRange: '€€',
      currenciesAccepted: 'EUR',
      knowsLanguage: 'sk',
      areaServed: AREA_SERVED,
      knowsAbout: [
        'Rekonštrukčné kúry na vlasy',
        'Regeneračné kúry na vlasy',
        'Hĺbkové čistenie vlasovej pokožky',
        'Detoxikácia vlasov Malibu C',
        'Keratínové ošetrenie vlasov',
        'Svadobné a spoločenské účesy',
        'Copánky a braids',
      ],
      founder: { '@id': `${SITE_URL}/#zane` },
      employee: { '@id': `${SITE_URL}/#zane` },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Sunday',
          opens: '00:00',
          closes: '00:00',
        },
      ],
      potentialAction: {
        '@type': 'ReserveAction',
        name: 'Objednať sa',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'tel:+421950249838',
          actionPlatform: [
            'https://schema.org/DesktopWebPlatform',
            'https://schema.org/MobileWebPlatform',
          ],
        },
      },
      makesOffer: [
        { '@id': `${SITE_URL}/#offer-premiova-rekonstrukcna-kura` },
        { '@id': `${SITE_URL}/#offer-hlbkova-regeneracna-kura` },
        { '@id': `${SITE_URL}/#offer-keratinove-osetrenie` },
        { '@id': `${SITE_URL}/#offer-hlbkove-cistenie` },
        { '@id': `${SITE_URL}/#offer-spolocensky-uces` },
        { '@id': `${SITE_URL}/#offer-svadobny-uces` },
        { '@id': `${SITE_URL}/#offer-uces-stuzkova` },
        { '@id': `${SITE_URL}/#offer-vysoky-cop` },
        { '@id': `${SITE_URL}/#offer-boxerske-copiky` },
        { '@id': `${SITE_URL}/#offer-cornrows` },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        '@id': `${SITE_URL}/#cennik-katalog`,
        name: 'Cenník služieb — O VLASY by Zane',
        url: `${SITE_URL}/#cennik`,
        itemListElement: [
          {
            '@type': 'OfferCatalog',
            name: 'Rekonštrukčné a regeneračné kúry',
            itemListElement: [
              {
                '@type': 'Offer',
                '@id': `${SITE_URL}/#offer-premiova-rekonstrukcna-kura`,
                name: 'Prémiová rekonštrukčná kúra',
                description:
                  'Hĺbková rekonštrukcia poškodených, farbených a chemicky ošetrených vlasov. Cena závisí od dĺžky a hustoty vlasov.',
                url: `${SITE_URL}/#cennik`,
                availability: 'https://schema.org/InStock',
                itemOffered: { '@id': `${SITE_URL}/#service-kury` },
                seller: { '@id': `${SITE_URL}/#salon` },
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  priceCurrency: 'EUR',
                  minPrice: 90,
                },
              },
              {
                '@type': 'Offer',
                '@id': `${SITE_URL}/#offer-hlbkova-regeneracna-kura`,
                name: 'Hĺbková regeneračná kúra',
                description:
                  'Intenzívna výživa pre suché, lámavé a namáhané vlasy. Vráti vlasom lesk, silu a vitalitu.',
                url: `${SITE_URL}/#cennik`,
                availability: 'https://schema.org/InStock',
                itemOffered: { '@id': `${SITE_URL}/#service-kury` },
                seller: { '@id': `${SITE_URL}/#salon` },
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  priceCurrency: 'EUR',
                  minPrice: 50,
                },
              },
              {
                '@type': 'Offer',
                '@id': `${SITE_URL}/#offer-keratinove-osetrenie`,
                name: 'Keratínové ošetrenie',
                description:
                  'Vyhladenie, lesk a ochrana vlasového vlákna keratínovým ošetrením.',
                url: `${SITE_URL}/#cennik`,
                availability: 'https://schema.org/InStock',
                itemOffered: { '@id': `${SITE_URL}/#service-kury` },
                seller: { '@id': `${SITE_URL}/#salon` },
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  priceCurrency: 'EUR',
                  minPrice: 100,
                },
              },
            ],
          },
          {
            '@type': 'OfferCatalog',
            name: 'Hĺbkové čistenie vlasov a pokožky',
            itemListElement: [
              {
                '@type': 'Offer',
                '@id': `${SITE_URL}/#offer-hlbkove-cistenie`,
                name: 'Hĺbkové čistenie vlasovej pokožky a vlasov',
                description:
                  'Detoxikačné ošetrenie Malibu C: odstráni minerály z tvrdej vody, chlór a nánosy stylingových produktov, zmierni podráždenie pokožky hlavy. Vegánske, bez sulfátov a parabénov.',
                url: `${SITE_URL}/#cennik`,
                availability: 'https://schema.org/InStock',
                itemOffered: { '@id': `${SITE_URL}/#service-cistenie` },
                seller: { '@id': `${SITE_URL}/#salon` },
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  priceCurrency: 'EUR',
                  minPrice: 50,
                },
              },
            ],
          },
          {
            '@type': 'OfferCatalog',
            name: 'Účesy pre výnimočné udalosti',
            itemListElement: [
              {
                '@type': 'Offer',
                '@id': `${SITE_URL}/#offer-spolocensky-uces`,
                name: 'Spoločenský účes',
                description:
                  'Účes na ples, oslavu či firemný večer, ktorý vydrží celý večer.',
                url: `${SITE_URL}/#cennik`,
                availability: 'https://schema.org/InStock',
                itemOffered: { '@id': `${SITE_URL}/#service-ucesy` },
                seller: { '@id': `${SITE_URL}/#salon` },
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  priceCurrency: 'EUR',
                  minPrice: 60,
                },
              },
              {
                '@type': 'Offer',
                '@id': `${SITE_URL}/#offer-svadobny-uces`,
                name: 'Svadobný účes',
                description:
                  'Účes pre nevestu aj svadobčanky, navrhnutý podľa šiat a typu vlasov. Pred svadbou odporúčame skúšobný účes.',
                url: `${SITE_URL}/#cennik`,
                availability: 'https://schema.org/InStock',
                itemOffered: { '@id': `${SITE_URL}/#service-ucesy` },
                seller: { '@id': `${SITE_URL}/#salon` },
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  priceCurrency: 'EUR',
                  minPrice: 60,
                },
              },
              {
                '@type': 'Offer',
                '@id': `${SITE_URL}/#offer-uces-stuzkova`,
                name: 'Účes na stužkovú',
                description: 'Účes na stužkovú slávnosť, ktorý vydrží do rána.',
                url: `${SITE_URL}/#cennik`,
                availability: 'https://schema.org/InStock',
                itemOffered: { '@id': `${SITE_URL}/#service-ucesy` },
                seller: { '@id': `${SITE_URL}/#salon` },
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  priceCurrency: 'EUR',
                  minPrice: 60,
                },
              },
            ],
          },
          {
            '@type': 'OfferCatalog',
            name: 'Braids',
            itemListElement: [
              {
                '@type': 'Offer',
                '@id': `${SITE_URL}/#offer-vysoky-cop`,
                name: 'Vysoký cop',
                url: `${SITE_URL}/#cennik`,
                availability: 'https://schema.org/InStock',
                itemOffered: { '@id': `${SITE_URL}/#service-braids` },
                seller: { '@id': `${SITE_URL}/#salon` },
                priceCurrency: 'EUR',
                price: 60,
              },
              {
                '@type': 'Offer',
                '@id': `${SITE_URL}/#offer-boxerske-copiky`,
                name: 'Boxerské copíky',
                url: `${SITE_URL}/#cennik`,
                availability: 'https://schema.org/InStock',
                itemOffered: { '@id': `${SITE_URL}/#service-braids` },
                seller: { '@id': `${SITE_URL}/#salon` },
                priceCurrency: 'EUR',
                price: 30,
              },
              {
                '@type': 'Offer',
                '@id': `${SITE_URL}/#offer-cornrows`,
                name: 'Cornrows',
                description: '4 kusy — 40 €, 6 kusov — 60 €, 8 kusov — 80 €.',
                url: `${SITE_URL}/#cennik`,
                availability: 'https://schema.org/InStock',
                itemOffered: { '@id': `${SITE_URL}/#service-braids` },
                seller: { '@id': `${SITE_URL}/#salon` },
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  priceCurrency: 'EUR',
                  minPrice: 40,
                  maxPrice: 80,
                },
              },
            ],
          },
        ],
      },
    },

    /* --------------------------------------------------------------- FOUNDER */
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#zane`,
      name: 'Žaneta Lábska',
      alternateName: 'Zane',
      jobTitle: 'Vlasová špecialistka',
      description:
        'Zakladateľka salónu O VLASY by Zane. Venuje sa zdraviu vlasov, ich obnove a regenerácii — diagnostike vlasov a pokožky hlavy, rekonštrukčným a regeneračným kúram, hĺbkovému čisteniu Malibu C a účesom pre výnimočné udalosti.',
      url: `${SITE_URL}/#o-nas`,
      worksFor: { '@id': `${SITE_URL}/#salon` },
      knowsAbout: [
        'Diagnostika vlasov a vlasovej pokožky',
        'Rekonštrukčné a regeneračné kúry',
        'Hĺbkové čistenie Malibu C',
        'Svadobné a spoločenské účesy',
      ],
      hasCredential: [
        'Malibu C',
        'Vitaker',
        'HTOKYO',
        'BB|one',
      ].map((brand) => ({
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Odborné školenie',
        name: `Školenie ${brand}`,
      })),
    },

    /* -------------------------------------------------------------- SERVICES */
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/#service-kury`,
      name: 'Rekonštrukčné a regeneračné kúry na vlasy',
      serviceType: 'Rekonštrukčná a regeneračná kúra na vlasy',
      description:
        'Rekonštrukčná procedúra pre hĺbkovú regeneráciu suchých, lámavých a poškodených vlasov. Vráti vlasom lesk, silu a vitalitu — viditeľný výsledok už po prvom ošetrení. Ideálne pre farbené, chemicky ošetrené alebo suché vlasy.',
      url: `${SITE_URL}/#sluzby`,
      provider: { '@id': `${SITE_URL}/#salon` },
      areaServed: AREA_SERVED,
      offers: [
        { '@id': `${SITE_URL}/#offer-premiova-rekonstrukcna-kura` },
        { '@id': `${SITE_URL}/#offer-hlbkova-regeneracna-kura` },
        { '@id': `${SITE_URL}/#offer-keratinove-osetrenie` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/#service-cistenie`,
      name: 'Hĺbkové čistenie vlasov a vlasovej pokožky (Malibu C)',
      serviceType: 'Hĺbkové čistenie vlasovej pokožky a vlasov',
      description:
        'Detoxikačné ošetrenie Malibu C, ktoré z vlasov a pokožky hlavy odstráni minerály z tvrdej vody, chlór a nánosy stylingových produktov. Vlasy sú ľahšie, lesklejšie a lepšie prijímajú následnú kúru či farbu. Úľava aj pre podráždenú a svrbivú pokožku. Vegánske prípravky bez sulfátov a parabénov.',
      url: `${SITE_URL}/#sluzby`,
      provider: { '@id': `${SITE_URL}/#salon` },
      areaServed: AREA_SERVED,
      offers: { '@id': `${SITE_URL}/#offer-hlbkove-cistenie` },
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/#service-ucesy`,
      name: 'Účesy pre výnimočné udalosti',
      serviceType: 'Spoločenský účes, svadobný účes a účes na stužkovú',
      description:
        'Spoločenské, svadobné a účesy na stužkovú, ktoré vydržia celý večer. Účes navrhneme podľa vašich šiat, typu vlasov a charakteru udalosti.',
      url: `${SITE_URL}/#sluzby`,
      provider: { '@id': `${SITE_URL}/#salon` },
      areaServed: AREA_SERVED,
      offers: [
        { '@id': `${SITE_URL}/#offer-spolocensky-uces` },
        { '@id': `${SITE_URL}/#offer-svadobny-uces` },
        { '@id': `${SITE_URL}/#offer-uces-stuzkova` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/#service-braids`,
      name: 'Copánky a braids',
      serviceType: 'Copánky, cornrows a vrkoče',
      description:
        'Vysoký cop, boxerské copíky a cornrows — vpletané účesy na každý deň aj na výnimočné udalosti.',
      url: `${SITE_URL}/#cennik`,
      provider: { '@id': `${SITE_URL}/#salon` },
      areaServed: AREA_SERVED,
      offers: [
        { '@id': `${SITE_URL}/#offer-vysoky-cop` },
        { '@id': `${SITE_URL}/#offer-boxerske-copiky` },
        { '@id': `${SITE_URL}/#offer-cornrows` },
      ],
    },

    /* ------------------------------------------------------- WEBSITE / PAGE */
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'O VLASY by Zane',
      alternateName: 'Good Hair by Zane',
      description:
        'Vlasový salón O VLASY by Zane v Moste pri Bratislave — regeneračné a rekonštrukčné kúry, hĺbkové čistenie vlasovej pokožky a účesy pre výnimočné udalosti.',
      inLanguage: 'sk',
      publisher: { '@id': `${SITE_URL}/#salon` },
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: 'Starostlivosť o vlasy Most pri Bratislave | O VLASY by Zane',
      description:
        'O vlasy sa staráme, nie iba o účes. Regeneračné kúry, hĺbkové čistenie vlasovej pokožky (Malibu C) a účesy na výnimočné udalosti v Moste pri Bratislave. Objednajte sa!',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#salon` },
      hasPart: { '@id': `${SITE_URL}/#faq` },
      inLanguage: 'sk',
      primaryImageOfPage: {
        '@type': 'ImageObject',
        '@id': `${SITE_URL}/#primaryimage`,
        url: `${SITE_URL}/vysledky/ovlasy2.webp`,
        contentUrl: `${SITE_URL}/vysledky/ovlasy2.webp`,
        width: 960,
        height: 1280,
        caption:
          'Hollywoodske vlny na zdravých blond vlasoch — spoločenský účes zo salónu O VLASY by Zane v Moste pri Bratislave',
      },
    },

    /* ------------------------------------------------------------------ FAQ */
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      name: 'Časté otázky o starostlivosti o vlasy',
      inLanguage: 'sk',
      isPartOf: { '@id': `${SITE_URL}/#webpage` },
      about: { '@id': `${SITE_URL}/#salon` },
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
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
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        {/* Chatbot widget hidden (S10) until its knowledge base is rebranded.
            Re-enable: <Script src="https://www.mdntech.org/widget.js"
            data-chatbot-id="60b63ca6-a231-4812-9288-3f6b776edbd8" strategy="lazyOnload" /> */}
      </body>
    </html>
  );
}
