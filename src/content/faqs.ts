/**
 * Single source of truth for the FAQ.
 *
 * Both the rendered accordion (`src/components/FAQ.tsx`) and the FAQPage
 * JSON-LD (`src/app/layout.tsx`) read from this array. They used to hold two
 * hand-copied versions and three of the seven answers had already drifted
 * apart -- the markup carried a truncated tail of the visible text. Google
 * requires FAQ markup to match the page, so never inline this content again.
 */
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: 'Čo je hĺbkové čistenie vlasovej pokožky a vlasov a komu pomôže?',
    a: 'Je to detoxikačné ošetrenie Malibu C, ktoré pomocou vitamínových kryštálov odstráni z vlasov a pokožky hlavy minerály z tvrdej vody, chlór a nánosy stylingových produktov. Pomôže, ak sú vlasy mdlé, ťažké, zle sa farbia alebo blond vlasy sťahujú do zelena, a tiež pri podráždenej, svrbivej pokožke či lupinách. Prípravky sú vegánske, bez sulfátov a parabénov. Cena je od 50 € podľa dĺžky a hustoty vlasov.',
  },
  {
    q: 'Koľko stojí regeneračná kúra v Moste pri Bratislave?',
    a: 'Hĺbková regeneračná kúra stojí od 50 €, prémiová rekonštrukčná kúra od 90 € a keratínové ošetrenie od 100 €. Konečná cena závisí od dĺžky a hustoty vlasov. Na bezplatnej konzultácii zhodnotíme stav vašich vlasov a pripravíme presnú kalkuláciu.',
  },
  {
    q: 'Aký je rozdiel medzi regeneračnou kúrou a hĺbkovým čistením?',
    a: 'Hĺbkové čistenie vlasy a pokožku najprv zbaví usadenín, ktoré bránia výžive preniknúť do vlasového vlákna. Regeneračná kúra následne dodá vlasom výživu, silu a lesk. Najlepší výsledok dosiahnete ich kombináciou: očistiť a potom regenerovať. Radi vám poradíme, čo vaše vlasy práve potrebujú.',
  },
  {
    q: 'Robíte aj svadobné účesy a účesy na stužkovú?',
    a: 'Áno. Vytvárame spoločenské, svadobné a účesy na stužkovú aj na akúkoľvek inú výnimočnú udalosť, cena je od 60 €. Účes navrhneme podľa vašich šiat a typu vlasov tak, aby vydržal celý večer. Pred svadbou odporúčame skúšobný účes a termín si rezervovať s dostatočným predstihom.',
  },
  {
    q: 'Robíte aj predlžovanie vlasov?',
    a: 'Predlžovanie vlasov aktuálne neponúkame. V salóne O VLASY by Zane sa sústredíme na zdravie vlasov: regeneračné a rekonštrukčné kúry, hĺbkové čistenie vlasovej pokožky a vlasov a účesy pre výnimočné udalosti. Ak hľadáte objem a dĺžku, radi vám poradíme, ako ich dosiahnuť starostlivosťou o vlastné vlasy.',
  },
  {
    q: 'Kde sa nachádza salón O VLASY by Zane?',
    a: 'Náš salón sa nachádza na adrese Nové polia 2, 900 46 Most pri Bratislave. Sme len pár minút od Bratislavy a ľahko dostupní aj z Ivanky pri Dunaji, Dunajskej Lužnej a Senca. Parkovanie je priamo pred salónom.',
  },
  {
    q: 'Musím sa objednať vopred?',
    a: 'Áno, pracujeme výlučne na objednávku, aby sme vám mohli venovať plnú pozornosť a pripraviť všetko potrebné. Zavolajte nám na +421 950 249 838 alebo napíšte na ovlasy.sk@gmail.com a dohodneme termín, ktorý vám vyhovuje.',
  },
];
