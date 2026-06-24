import { useEffect, useMemo, useState } from 'react';

const navItems = [
  { label: 'Start', target: 'hero' },
  { label: 'Über uns', target: 'about' },
  { label: 'Produkte', view: 'products' },
  { label: 'Karriere', view: 'career' },
  { label: 'Lehrpfad', target: 'learning-path' },
  { label: 'Kontakt', view: 'contact' },
];

const highlights = [
  {
    title: 'Handwerk',
    text: 'Brote von Hand gemacht, mit Ruhe, Erfahrung und dem Gefühl für den richtigen Moment.',
  },
  {
    title: 'Regionalität',
    text: 'Zutaten aus der Region geben jedem Brot und Gebäck einen ehrlichen, natürlichen Charakter.',
  },
  {
    title: 'Nachhaltigkeit',
    text: 'Bewusst wirtschaften, Ressourcen schonen und Verantwortung übernehmen, aus Überzeugung.',
  },
];

const productTeasers = [
  ['Brote', 'Rustikale Laibe, Sauerteig und saisonale Spezialitäten aus der Backstube.'],
  ['Semmeln', 'Frisch gebacken für jeden Morgen, jede Pause und jeden Familientisch.'],
  ['Feingebäck', 'Klassische Leckereien mit feinem Geschmack und handwerklicher Sorgfalt.'],
  ['Lebkuchen', 'Saisonale Lisl-Sorten mit Gewürzen, Schokolade und regionaler Handschrift.'],
  ['Snacks', 'Herzhafte Begleiter für unterwegs, frisch belegt und schnell genossen.'],
];

const newsItems = [
  {
    eyebrow: 'Neu im Sortiment',
    title: 'BIO Protein Sauerteigbrot',
    text: 'Kräftiger Geschmack, ausgewählte Zutaten und ein sättigendes Sauerteig-Erlebnis.',
  },
  {
    eyebrow: 'Aktuelles Angebot',
    title: 'Wochenend-Special',
    text: 'Frische Brötchen, saisonale Kuchen und ein kleines Extra rund um das Wochenende.',
  },
];

const learningSteps = [
  'Getreide verstehen',
  'Sauerteig erleben',
  'Backstube entdecken',
  'Nachhaltigkeit begreifen',
];

const careerStats = [
  ['Team', 'Verkauf, Backstube, Büro'],
  ['Start', 'Ausbildung, Teilzeit, Vollzeit'],
  ['Wert', 'Rabatte, Zuschläge, Perspektiven'],
];

const careerPrinciples = [
  {
    title: 'Arbeitszeiten, die planbar bleiben',
    text: 'Backstube und Verkauf arbeiten mit Früh-, Mittel- und Spätschichten, abgestimmt auf Standort, Team und Alltag.',
  },
  {
    title: 'Faire Bezahlung und Zuschläge',
    text: 'Leistung soll sichtbar sein. Sonn- und Feiertagszuschläge gehören zur Wertschätzung im Alltag dazu.',
  },
  {
    title: 'Vielfältiges, herzliches Team',
    text: 'Bei Wiesender zählt, wie Menschen miteinander umgehen. Herkunft, Lebensweg und Erfahrung machen die Crew stärker.',
  },
  {
    title: 'Vorteile, die wirklich ankommen',
    text: 'Mitarbeiterrabatt, Entwicklungsmöglichkeiten und je nach Situation weitere Unterstützung zeigen: Einsatz wird gesehen.',
  },
  {
    title: 'Perspektiven zum Wachsen',
    text: 'Wer Verantwortung übernehmen möchte, bekommt Raum dafür, persönlich begleitet und passend zum eigenen Weg.',
  },
  {
    title: 'Miteinander statt gegeneinander',
    text: 'Das Team arbeitet nah, direkt und hilfsbereit. Neue Kolleginnen und Kollegen sollen gut ankommen können.',
  },
];

const careerRoles = [
  {
    area: 'Verkauf',
    title: 'Gastgeber an der Theke',
    text: 'Beraten, vorbereiten, verkaufen und dafür sorgen, dass Gäste mit einem guten Gefühl gehen.',
  },
  {
    area: 'Backstube',
    title: 'Handwerk mit Teig und Zeit',
    text: 'Kneten, formen, backen und jeden Tag daran arbeiten, dass Qualität sichtbar und schmeckbar wird.',
  },
  {
    area: 'Büro & Organisation',
    title: 'Mitdenken im Hintergrund',
    text: 'Planung, Verwaltung und Kommunikation zusammenhalten, damit Filialen und Backstube gut laufen.',
  },
  {
    area: 'Ausbildung',
    title: 'Lernen mit echtem Team',
    text: 'Einsteigen, anpacken, Fragen stellen und Schritt für Schritt mehr Verantwortung übernehmen.',
  },
];

const careerTestimonials = [
  {
    name: 'Christiane Jung',
    role: 'Bezirksleiterin',
    quote:
      'Verantwortung entsteht hier mit Vertrauen. Wer mitgestalten möchte, wird gesehen, begleitet und ernst genommen.',
  },
  {
    name: 'Maximilian Rebhan',
    role: 'Werkstudent',
    quote:
      'Das Team arbeitet offen und auf Augenhöhe. Lernen, Studium und persönliche Entwicklung bekommen hier echten Raum.',
  },
];

const careerGallery = [
  {
    image:
      'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=900&q=82',
    title: 'Verkauf & Beratung',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=900&q=82',
    title: 'Backstube & Handwerk',
  },
  {
    image:
      'https://images.unsplash.com/photo-1523294587484-bae6cc870010?auto=format&fit=crop&w=900&q=82',
    title: 'Team & Alltag',
  },
];

const centralOffice = {
  title: 'Zentrale',
  name: 'Wiesender Naturbackstube',
  address: 'Michael-Weingartner-Str. 2, 85276 Pfaffenhofen a. d. Ilm',
  phone: '+49 (0) 84 41 / 47708-0',
  fax: '+49 (0) 84 41 / 47708-99',
  email: 'info@wiesender.de',
};

const stationGroups = [
  {
    city: 'Pfaffenhofen',
    stations: [
      {
        name: 'Stammsitz',
        address: 'Michael-Weingartner-Str. 2, 85276 Pfaffenhofen a. d. Ilm',
        phone: '+49 (0) 84 41 / 477 088 8',
        hours: ['Mo - Sa: 07:00 - 18:00 Uhr', 'So: 07:30 - 18:00 Uhr'],
      },
      {
        name: 'Hauptplatz',
        address: 'Hauptplatz 37, 85276 Pfaffenhofen a. d. Ilm',
        phone: '+49 (0) 84 41 / 494 440',
        hours: ['Mo - Sa: 06:30 - 18:00 Uhr', 'So: 07:30 - 18:00 Uhr'],
      },
      {
        name: 'Tültorstraße',
        address: 'Tültorstraße 4, 85276 Pfaffenhofen a. d. Ilm',
        phone: '+49 (0) 84 41 / 803 390',
        hours: ['Mo - Sa: 06:00 - 18:00 Uhr', 'So: 07:30 - 18:00 Uhr'],
      },
      {
        name: 'Am Netto-Markt',
        address: 'Scheyerer Straße 90, 85276 Pfaffenhofen a. d. Ilm',
        phone: '+49 (0) 84 41 / 783 648 7',
        hours: ['Mo - Fr: 06:00 - 18:30 Uhr', 'Sa: 06:00 - 15:00 Uhr', 'So: 07:30 - 10:30 Uhr'],
      },
      {
        name: 'Brezenhaus',
        address: 'Balthasar-Kraft-Straße 1, 85276 Pfaffenhofen a. d. Ilm',
        phone: '+49 (0) 84 41 / 277 878',
        hours: ['Mo - Fr: 06:00 - 16:00 Uhr', 'Sam-, Sonn- und Feiertags sowie in den Schulferien geschlossen.'],
      },
    ],
  },
  {
    city: 'Freising',
    stations: [
      {
        name: 'Im REWE-Markt',
        address: 'Prinz-Ludwig-Str. 48, 85354 Freising',
        phone: '+49 (0) 81 61 / 787 842 8',
        hours: ['Mo - Sa: 07:00 - 20:00 Uhr', 'So: 07:30 - 10:30 Uhr'],
      },
      {
        name: 'TUM',
        address: 'Gregor-Mendel-Str. 1, 85354 Freising',
        phone: '+49 (0) 81 61 / 887 708 5',
        hours: ['Mo - Sa: 07:00 - 18:00 Uhr', 'So: 07:30 - 15:00 Uhr'],
      },
    ],
  },
  {
    city: 'Moosburg',
    stations: [
      {
        name: 'Driescherstraße',
        address: 'Driescherstr. 1, 85368 Moosburg',
        phone: '+49 (0) 87 61 / 727 289 5',
        hours: ['Mo - Sa: 06:00 - 19:00 Uhr', 'So: 07:30 - 10:30 Uhr'],
      },
      {
        name: 'Innenstadt',
        address: 'Stadtplatz 17, 85368 Moosburg',
        phone: '+49 (0) 87 61 / 724 754 4',
        hours: ['Mo - Sa: 07:00 - 18:00 Uhr', 'So: 07:30 - 18:00 Uhr'],
      },
      {
        name: 'Neue Industriestraße',
        address: 'Neue Industriestraße 7, 85368 Moosburg',
        phone: '+49 (0) 87 61 / 720 690 0',
        hours: ['Mo - Sa: 07:00 - 18:00 Uhr', 'So + Feiertage: geschlossen'],
      },
    ],
  },
  {
    city: 'Umgebung',
    stations: [
      {
        name: 'Scheyern',
        address: 'Klosterberg 1, 85398 Scheyern',
        phone: '+49 (0) 84 41 / 879 046 3',
        hours: ['Mo - Sa: 07:00 - 20:00 Uhr', 'So: 07:30 - 15:00 Uhr'],
      },
      {
        name: 'Gerolsbach',
        address: 'St.-Andreas-Straße 6, 85302 Gerolsbach',
        phone: '+49 (0) 84 45 / 928 952',
        hours: ['Mo - Fr: 06:00 - 18:00 Uhr', 'Sa: 06:00 - 12:00 Uhr', 'So: 07:30 - 10:30 Uhr'],
      },
      {
        name: 'Hohenkammer',
        address: 'Eisfeldstraße 5, 85411 Hohenkammer',
        phone: '+49 (0) 81 37 / 995 462 7',
        hours: ['Mo - Sa: 06:30 - 20:00 Uhr', 'So: geschlossen'],
      },
      {
        name: 'Jetzendorf',
        address: 'Aichacher Straße 13, 85305 Jetzendorf',
        phone: '+49 (0) 84 41 / 477 088 8',
        hours: ['Mo - Sa: 07:00 - 18:00 Uhr', 'So: 07:30 - 18:00 Uhr'],
      },
      {
        name: 'Kirchdorf',
        address: 'Hauptstraße 34, 85414 Kirchdorf',
        phone: '+49 (0) 81 66 / 993 748 0',
        hours: ['Mo - Fr: 06:00 - 19:00 Uhr', 'Sa: 06:00 - 18:00 Uhr', 'So: 07:30 - 10:30 Uhr'],
      },
      {
        name: 'Kranzberg',
        address: 'Obere Dorfstraße 27, 85402 Kranzberg',
        phone: '+49 (0) 81 66 / 993 486 1',
        hours: ['Mo - Fr: 06:00 - 18:00 Uhr', 'Sa: 06:00 - 12:00 Uhr', 'So: 07:30 - 10:30 Uhr'],
      },
      {
        name: 'Kühbach - im Nettomarkt',
        address: 'Paarer Straße 12, 86556 Kühbach',
        phone: '+49 (0) 82 51 / 872 954 2',
        hours: ['Mo - Sa: 07:00 - 19:00 Uhr', 'So + Feiertage: geschlossen'],
      },
      {
        name: 'Berglern',
        address: 'St. Florian Weg 1, 85459 Berglern',
        phone: '+49 (0) 87 62 / 729 001 1',
        hours: ['Mo - Sa: 06:30 - 20:00 Uhr', 'So: 07:30 - 10:30 Uhr'],
      },
      {
        name: 'Nandlstadt',
        address: 'Mainburger Straße 29, 85405 Nandlstadt',
        phone: '+49 (0) 87 56 / 913 886 4',
        hours: ['Mo - Sa: 07:00 - 20:00 Uhr', 'So: 07:30 - 10:30 Uhr'],
      },
      {
        name: 'Olching',
        address: 'Hermann-Böcker-Straße 13, 82140 Olching',
        phone: '+49 (0) 81 42 / 667 338 4',
        hours: ['Mo - Sa: 07:00 - 20:00 Uhr', 'So + Feiertage: geschlossen'],
      },
      {
        name: 'Unterschleißheim',
        address: 'Emmy-Noether-Ring 38, 85716 Unterschleißheim',
        phone: '+49 (0) 89 / 329 667 50',
        hours: ['Mo - Sa: 07:00 - 20:00 Uhr', 'So + Feiertage: geschlossen'],
      },
    ],
  },
];

const stationCount = stationGroups.reduce((total, group) => total + group.stations.length, 0);

const getMapUrl = (address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const productCategoryImages = {
  brote:
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=82',
  semmeln:
    'https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=900&q=82',
  feingebaeck:
    'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&w=900&q=82',
  lebkuchen:
    'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=82',
  snacks:
    'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=82',
};

const productCategories = [
  {
    value: 'all',
    label: 'Alle',
    title: 'Alle Produkte',
    description: 'Das komplette Sortiment aus Brot, Semmeln, Feingebäck, Lebkuchen und Snacks.',
  },
  {
    value: 'brote',
    label: 'Brote',
    title: 'Unsere BIO-Brote',
    description:
      'Jedes BIO-Brot ist ein Stück Heimat, gewachsen aus Erfahrung, Geduld und echter Handwerkskunst.',
  },
  {
    value: 'semmeln',
    label: 'Semmeln',
    title: 'Unsere Semmeln',
    description:
      'Kleine Klassiker mit Charakter, goldbraun gebacken, luftig im Inneren und täglich frisch.',
  },
  {
    value: 'feingebaeck',
    label: 'Feingebäck',
    title: 'Unser Feingebäck',
    description:
      'Croissants, Krapfen, Taschen und Schnecken als kleine süße Auszeiten aus der Naturbackstube.',
  },
  {
    value: 'lebkuchen',
    label: 'Lebkuchen',
    title: 'Unsere Lebkuchen',
    description:
      'Saisonale Lisl-Lebkuchen mit regionalen Zutaten, Gewürzen und liebevoller Handarbeit.',
  },
  {
    value: 'snacks',
    label: 'Snacks',
    title: 'Unsere Snacks',
    description:
      'Herzhaft, frisch und mit derselben Sorgfalt gemacht wie alle Backwaren, perfekt für zwischendurch.',
  },
];

const productCategoryMeta = Object.fromEntries(
  productCategories.map((category) => [category.value, category])
);

const productPageItems = [
  {
    title: 'BIO-Klosterlaib',
    subtitle: '3 Pfund Bio.',
    description:
      '80% BIO-Roggenmehl, 20% BIO-Weizenmehl, BIO-Sauerteig, Wasser, BIO-Hefe, Steinsalz und hauseigene BIO-Gewürzrezeptur.',
    badge: 'Bio',
    isBio: true,
    image:
      'https://www.wiesender.de/wp-content/uploads/2025/07/naturbackstube-wiesender-klosterlaib-1024x1024.webp',
  },
  {
    title: 'BIO-Roggenmischbrot',
    subtitle: '500g Klassiker.',
    description:
      '60% BIO-Roggenmehl, 40% BIO-Weizenmehl, hauseigener BIO-Sauerteig, Wasser, BIO-Hefe, Steinsalz und feine BIO-Brotgewürze.',
    badge: 'Bio',
    isBio: true,
    image:
      'https://www.wiesender.de/wp-content/uploads/2025/07/naturbackstube-wiesender-Roggenmischbrot-300x300.webp',
  },
  {
    title: 'BIO-Dinkelsaatenbrot',
    subtitle: '500g körnige Klasse.',
    description:
      '100% BIO-Dinkelweizenmehl, Steinsalz, BIO-Leinsaaten, BIO-Hefe und BIO-Apfelessig.',
    badge: 'Bio',
    isBio: true,
    image:
      'https://www.wiesender.de/wp-content/uploads/2025/07/naturbackstube-wiesender-dinkelsaatenbrot-300x300.webp',
  },
  {
    title: 'BIO-Craft-Bierbrot',
    subtitle: '750g voller Geschmack.',
    description:
      'BIO-Weizenmehl, BIO-Roggenmehl, hauseigener BIO-Biersauerteig, BIO-Quark, Kartoffelflocken, Steinsalz und Gewürze.',
    badge: 'Bio',
    isBio: true,
    image:
      'https://www.wiesender.de/wp-content/uploads/2025/07/naturbackstube-wiesender-craftbierbrot-300x300.webp',
  },
  {
    title: 'BIO-Bauer',
    subtitle: '750g Evergreen.',
    description:
      'BIO-Roggenmehl, BIO-Weizenmehl, hauseigener BIO-Sauerteig, BIO-Hefe, Steinsalz und feine BIO-Brotgewürze.',
    badge: 'Bio',
    isBio: true,
    image:
      'https://www.wiesender.de/wp-content/uploads/2025/07/naturbackstube-wiesender-bauer-300x300.webp',
  },
  {
    title: 'BIO-Baguette',
    subtitle: 'Knusprig. Luftig. Gut.',
    description: '100% BIO-Weizenmehl, Wasser, BIO-Hefe und Steinsalz.',
    badge: 'Bio',
    isBio: true,
    image:
      'https://www.wiesender.de/wp-content/uploads/2025/07/naturbackstube-wiesender-Ofenbaguette-300x300.webp',
  },
  {
    title: 'BIO-Kornrad',
    subtitle: '500g voller Geschmack.',
    description:
      'BIO-Weizenvollkornmehl, BIO-Roggenvollkornmehl, Sauerteig, Dinkelschrot, Ölsaaten, Walnüsse, Malz und Gewürze.',
    badge: 'Bio',
    isBio: true,
    image:
      'https://www.wiesender.de/wp-content/uploads/2026/05/Bio-Kornrad-1-300x300.png',
  },
  {
    title: 'BIO-Ilmtaler',
    subtitle: '2kg Firmengeschichte.',
    description:
      'BIO-Roggenmehl, BIO-Weizenmehl, hauseigener BIO-Sauerteig, Hefe, Steinsalz und feine BIO-Brotgewürze.',
    badge: 'Bio',
    isBio: true,
    image:
      'https://www.wiesender.de/wp-content/uploads/2025/10/BIO-Ilmtaler-300x300.png',
  },
  {
    title: 'BIO-Sonnenblumenbrot',
    subtitle: '750g sonniger Geschmack.',
    description:
      'BIO-Roggenmehl, BIO-Weizenmehl, Sauerteig, geröstete BIO-Sonnenblumenkerne, BIO-Hefe, Steinsalz und Gewürze.',
    badge: 'Bio',
    isBio: true,
    image:
      'https://www.wiesender.de/wp-content/uploads/2025/10/BIO-Sonnblumenbrot-300x300.png',
  },
  {
    title: 'BIO-Bratkartoffelbrot',
    subtitle: '500g Saftigkeit.',
    description:
      'BIO-Weizenmehl, BIO-Roggenmehl, extra große BIO-Kartoffelstücke, Sauerteig, BIO-Hefe, Steinsalz und Gewürze.',
    badge: 'Bio',
    isBio: true,
    image:
      'https://www.wiesender.de/wp-content/uploads/2025/07/naturbackstube-wiesender-bratkartoffelbrot-300x300.webp',
  },
  {
    title: 'BIO-Finnenbrot',
    subtitle: '500g volles Korn.',
    description:
      'BIO-Roggenmehl, BIO-Weizenmehl, Sauerteig, Weizenschrot, Roggenschrot, Ölsaaten, Malz, Hefe und Gewürze.',
    badge: 'Bio',
    isBio: true,
    image:
      'https://www.wiesender.de/wp-content/uploads/2025/07/naturbackstube-wiesender-finnenbrot-300x300.webp',
  },
  {
    title: 'Steinofenkruste',
    subtitle: 'Das Rustikale.',
    description: 'Weizenmehl, Sauerteig, Wasser, Hefe und Steinsalz.',
    badge: 'Classic',
    isBio: false,
    image:
      'https://www.wiesender.de/wp-content/uploads/2025/07/naturbackstube-wiesender-steinofenkruste-300x300.webp',
  },
  {
    category: 'semmeln',
    title: 'Laugenzöpferl',
    subtitle: 'Mit Liebe von Hand geflochten.',
    description: 'Weizenmehl, Wasser, Salz, Weizenmalzmehl, Rapsöl, Hefe, Roggenmehl und Palmfett.',
    badge: 'Semmel',
    image: productCategoryImages.semmeln,
  },
  {
    category: 'semmeln',
    title: 'Breze',
    subtitle: 'Mit Liebe von Hand gedreht.',
    description: 'Weizenmehl, Wasser, Salz, Weizenmalzmehl, Rapsöl, Hefe, Roggenmehl und Palmfett.',
    badge: 'Semmel',
    image: productCategoryImages.semmeln,
  },
  {
    category: 'semmeln',
    title: 'Dinkel-Handling',
    subtitle: '100% Dinkel.',
    description: 'Bio-Dinkelweizenmehl, Wasser, Kartoffelflocken, Salz, Hefe, Dinkelmalzmehl und Honig.',
    badge: 'Semmel',
    image: productCategoryImages.semmeln,
  },
  {
    category: 'semmeln',
    title: 'Kürbiskernsemmel',
    subtitle: 'Nussig und kernig.',
    description:
      'Mit Roggenvollkornschrot, Bio-Sauerteig, Saaten, Kürbiskernen, Haferflocken und Kartoffelflocken.',
    badge: 'Semmel',
    image: productCategoryImages.semmeln,
  },
  {
    category: 'semmeln',
    title: 'Kärtner',
    subtitle: 'Vollkorn voll lecker.',
    description:
      'Weizenmehl, Wasser, Weizenvollkornschrot, Backleinsamen, Dinkelgrieß, Hefe, Salz, Bio-Kümmel und Sauerteig.',
    badge: 'Semmel',
    image: productCategoryImages.semmeln,
  },
  {
    category: 'semmeln',
    title: 'Roggi',
    subtitle: 'Voll im Geschmack.',
    description: 'Weizenmehl, Wasser, Roggenmehl, Röstzwiebeln, Sesam, Kürbiskerne, Hefe und Salz.',
    badge: 'Semmel',
    image: productCategoryImages.semmeln,
  },
  {
    category: 'semmeln',
    title: 'Bauernsemmel',
    subtitle: 'Rösch und frisch.',
    description: 'Weizenmehl, Wasser, Malzmehl, Traubenzucker, Weizengrieß, Roggenmehl und Weizensauerteig.',
    badge: 'Semmel',
    image: productCategoryImages.semmeln,
  },
  {
    category: 'semmeln',
    title: 'Knopfsemmel',
    subtitle: 'Klassisch und knusprig.',
    description: 'Weizenmehl, Wasser, Roggenmehl, Malzmehl, Hefe, Speisesalz und Rapsöl.',
    badge: 'Semmel',
    image: productCategoryImages.semmeln,
  },
  {
    category: 'semmeln',
    title: 'Sesamsemmel',
    subtitle: 'Sesam pur.',
    description: 'Klassische Semmel mit Weizensauerteig und Sesam für einen nussigen Biss.',
    badge: 'Semmel',
    image: productCategoryImages.semmeln,
  },
  {
    category: 'semmeln',
    title: 'Mohnsemmel',
    subtitle: 'Mohn satt.',
    description: 'Klassische Semmel mit Weizensauerteig und reichlich Mohn auf goldbrauner Kruste.',
    badge: 'Semmel',
    image: productCategoryImages.semmeln,
  },
  {
    category: 'feingebaeck',
    title: 'Schoko-Croissant',
    subtitle: 'Knusprig, schokoladig, gut.',
    description: 'Weizenmehl, Butter, Wasser und Schokoladencreme für eine feine süße Auszeit.',
    badge: 'Feingebäck',
    image: productCategoryImages.feingebaeck,
  },
  {
    category: 'feingebaeck',
    title: 'Butter-Croissant',
    subtitle: 'Buttrig. Blättrig. Klassiker.',
    description: 'Weizenmehl, Butter, Wasser, Hefe, Zucker und Vollmischpulver.',
    badge: 'Feingebäck',
    image: productCategoryImages.feingebaeck,
  },
  {
    category: 'feingebaeck',
    title: 'Laugen-Croissant',
    subtitle: 'Croissant auf bayerisch.',
    description: 'Butter-Croissant mit Lauge und Sesam, herzhaft interpretiert.',
    badge: 'Feingebäck',
    image: productCategoryImages.feingebaeck,
  },
  {
    category: 'feingebaeck',
    title: 'Marillenkrapfen',
    subtitle: 'Nicht nur zu Fasching ein Genuss.',
    description: 'Goldbrauner Krapfen mit Marillenfüllung und Puderzucker.',
    badge: 'Feingebäck',
    image: productCategoryImages.feingebaeck,
  },
  {
    category: 'feingebaeck',
    title: 'Kirschtasche',
    subtitle: 'Sauerkirsch küsst Mandel.',
    description: 'Blättriges Gebäck mit Sauerkirschen, Mandeln, Butter und Zimt.',
    badge: 'Feingebäck',
    image: productCategoryImages.feingebaeck,
  },
  {
    category: 'feingebaeck',
    title: 'Quarktasche',
    subtitle: 'Klassisch gefaltet. Fein gefüllt.',
    description: 'Fein gefülltes Plundergebäck mit Quark, Zucker, Vollei, Butter und Hefe.',
    badge: 'Feingebäck',
    image: productCategoryImages.feingebaeck,
  },
  {
    category: 'feingebaeck',
    title: 'Donut',
    subtitle: 'Von Hand geformt.',
    description: 'Süßes Handgebäck mit Fondant, Vollei und Hefe.',
    badge: 'Feingebäck',
    image: productCategoryImages.feingebaeck,
  },
  {
    category: 'feingebaeck',
    title: 'Nussschnecke',
    subtitle: 'Eingedreht und voller Nuss.',
    description: 'Mit Haselnuss, Zimt, Kakao, Haselnusspaste und feinem Aroma.',
    badge: 'Feingebäck',
    image: productCategoryImages.feingebaeck,
  },
  {
    category: 'lebkuchen',
    title: 'Die Lisl-Lisl',
    subtitle: 'Der Lisl Klassiker.',
    description: 'Marzipan, geröstete Mandeln, Orangeat, Zitronat, Bio-Dinkelmehl, Gewürze und Zartbitter-Schokolade.',
    badge: 'Saisonal',
    image: productCategoryImages.lebkuchen,
  },
  {
    category: 'lebkuchen',
    title: 'Himbeer-Schoko-Lisl',
    subtitle: 'Fruchtig und schokoladig.',
    description: 'Lisl-Lebkuchen mit Himbeermark, Himbeer-Crisp, Vanille und Zartbitter-Schokolade.',
    badge: 'Saisonal',
    image: productCategoryImages.lebkuchen,
  },
  {
    category: 'lebkuchen',
    title: 'Bratapfel-Zimt-Lisl',
    subtitle: 'Winterlich fein.',
    description: 'Mit Apfelsaft, Zimt, Zartbitter-Schokolade und weißer Schokolade.',
    badge: 'Saisonal',
    image: productCategoryImages.lebkuchen,
  },
  {
    category: 'lebkuchen',
    title: 'Walnuss-Lisl',
    subtitle: 'Nussig und kräftig.',
    description: 'Marzipan, geröstete Mandeln, Walnüsse, Gewürze und Zartbitter-Schokolade.',
    badge: 'Saisonal',
    image: productCategoryImages.lebkuchen,
  },
  {
    category: 'lebkuchen',
    title: 'Pistazien-Lisl',
    subtitle: 'Fein mit Pistazie.',
    description: 'Lisl-Lebkuchen mit Pistazien und Vollmilch-Schokolade.',
    badge: 'Saisonal',
    image: productCategoryImages.lebkuchen,
  },
  {
    category: 'lebkuchen',
    title: 'Karamell-Krokant-Lisl',
    subtitle: 'Süß, knackig, rund.',
    description: 'Mit Karamell, Mandelkrokant, Vollmilch-Schokolade und Zartbitter-Schokolade.',
    badge: 'Saisonal',
    image: productCategoryImages.lebkuchen,
  },
  {
    category: 'lebkuchen',
    title: 'Rum-Trüffel-Lisl',
    subtitle: 'Aromatisch und cremig.',
    description: 'Mit Rumpaste, Trüffelmasse, Vollmilch-Schokolade und weißer Schokolade.',
    badge: 'Saisonal',
    image: productCategoryImages.lebkuchen,
  },
  {
    category: 'lebkuchen',
    title: 'Kokos-Lisl',
    subtitle: 'Hell, süß und kokosfein.',
    description: 'Mit Kokosraspeln, Kokosmark, Bio-Dinkelmehl, Gewürzen und weißer Schokolade.',
    badge: 'Saisonal',
    image: productCategoryImages.lebkuchen,
  },
  {
    category: 'lebkuchen',
    title: 'Eierlikör-Lisl',
    subtitle: 'Cremig und festlich.',
    description: 'Mit Eierlikör, weißer Schokolade und Zartbitter-Schokolade.',
    badge: 'Saisonal',
    image: productCategoryImages.lebkuchen,
  },
  {
    category: 'lebkuchen',
    title: 'Haselnuss-Nougat-Lisl',
    subtitle: 'Nougat trifft Nuss.',
    description: 'Mit Haselnüssen, Mandeln, Nougat, Sahne, Gewürzen und weißer Schokolade.',
    badge: 'Saisonal',
    image: productCategoryImages.lebkuchen,
  },
  {
    category: 'lebkuchen',
    title: 'Lisl-Mischungen',
    subtitle: 'Für alle, die sich nicht entscheiden möchten.',
    description: 'Verschiedene Lisl-Sorten bereits als Mischung gepackt.',
    badge: 'Online',
    image: productCategoryImages.lebkuchen,
  },
  {
    category: 'lebkuchen',
    title: 'Lisl-Spitzen',
    subtitle: 'Zum Probieren und Teilen.',
    description: 'Eine Auswahl verschiedener Lisl-Sorten für alle, die Vielfalt möchten.',
    badge: 'Online',
    image: productCategoryImages.lebkuchen,
  },
  {
    category: 'snacks',
    title: 'Leberkäse-Semmel',
    subtitle: 'Bayerisch in der Semmel.',
    description: 'Bauernsemmel, Butter, Leberkäse und Essiggurke.',
    badge: 'Snack',
    image: productCategoryImages.snacks,
  },
  {
    category: 'snacks',
    title: 'Salami-Semmel',
    subtitle: 'Herzhaft auf die Hand.',
    description: 'Bauernsemmel, Butter, Salami und Essiggurke.',
    badge: 'Snack',
    image: productCategoryImages.snacks,
  },
  {
    category: 'snacks',
    title: 'Käse-Bauernsemmel',
    subtitle: 'Für Käsefans mit Gemüseambition.',
    description: 'Bauernsemmel, Butter, Gouda, Tomate und Gurke.',
    badge: 'Vegetarisch',
    image: productCategoryImages.snacks,
  },
  {
    category: 'snacks',
    title: 'Scharfer Italiener',
    subtitle: 'Mediterran und scharf.',
    description: 'Dinkelhandling, Basilikumcreme, Tomaten, Mozzarella und Rucola.',
    badge: 'Vegetarisch',
    image: productCategoryImages.snacks,
  },
  {
    category: 'snacks',
    title: 'Rosmarinkruste',
    subtitle: 'Würzig trifft zart.',
    description: 'Dinkelhandling, Frischkäse, Schinken und Salat.',
    badge: 'Snack',
    image: productCategoryImages.snacks,
  },
  {
    category: 'snacks',
    title: 'Frischkäse Roggi',
    subtitle: 'Leicht und voller Geschmack.',
    description: 'Roggi, Frischkäse, Gurke und Tomaten.',
    badge: 'Vegetarisch',
    image: productCategoryImages.snacks,
  },
  {
    category: 'snacks',
    title: 'Omlette-Weckerl',
    subtitle: 'Frühstück zum Mitnehmen.',
    description: 'Bauernsemmel, Butter, Omlette, Gurke, Kresse und optional Speck.',
    badge: 'Vegetarisch',
    image: productCategoryImages.snacks,
  },
  {
    category: 'snacks',
    title: 'Butterbreze',
    subtitle: 'Butter. Breze. Mehr braucht’s nicht.',
    description: 'Breze und Butter.',
    badge: 'Vegetarisch',
    image: productCategoryImages.snacks,
  },
  {
    category: 'snacks',
    title: 'Scharfe Breze',
    subtitle: 'Breze mit Wumms.',
    description: 'Breze mit Pfeffer.',
    badge: 'Vegetarisch',
    image: productCategoryImages.snacks,
  },
  {
    category: 'snacks',
    title: 'Schlemmerbreze',
    subtitle: 'Extra belegt. Extra gut.',
    description: 'Breze, Käse und Salami.',
    badge: 'Snack',
    image: productCategoryImages.snacks,
  },
  {
    category: 'snacks',
    title: 'Käsebreze',
    subtitle: 'Breze plus Käse gleich Glück.',
    description: 'Breze mit Käse überbacken.',
    badge: 'Vegetarisch',
    image: productCategoryImages.snacks,
  },
  {
    category: 'snacks',
    title: 'Käse-Croissant',
    subtitle: 'Für Käseliebhaber mit Stil.',
    description: 'Croissant mit Butter, Hefe, Vollmischpulver und Käse.',
    badge: 'Vegetarisch',
    image: productCategoryImages.snacks,
  },
];

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=82',
    title: 'Frisch gebacken heute',
    text: 'Brot, Semmeln und saisonale Spezialitäten mit ehrlicher Handwerksqualität.',
    label: 'Heute',
  },
  {
    image:
      'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=1400&q=82',
    title: 'Feines aus der Backstube',
    text: 'Süße und deftige Klassiker, sorgfältig gebacken und schön präsentiert.',
    label: 'Gebäck',
  },
  {
    image:
      'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1400&q=82',
    title: 'Backstube in Aktion',
    text: 'Jeden Tag entsteht aus Mehl, Wasser, Zeit und Erfahrung etwas Besonderes.',
    label: 'Handwerk',
  },
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeView, setActiveView] = useState('home');
  const [productFilter, setProductFilter] = useState('all');

  const visibleProducts = useMemo(() => {
    if (productFilter !== 'all') {
      return productPageItems.filter((product) => (product.category ?? 'brote') === productFilter);
    }

    return productPageItems;
  }, [productFilter]);

  const activeProductCategory = productCategoryMeta[productFilter] ?? productCategoryMeta.all;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  const openProducts = () => {
    setActiveView('products');
  };

  const openCareer = () => {
    setActiveView('career');
  };

  const openContact = () => {
    setActiveView('contact');
  };

  const navigateHome = (target) => {
    setActiveView('home');

    window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#f5efe4] text-[#263126]">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#17456a] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Zum Inhalt springen
      </a>

      <header className="sticky top-0 z-40 border-b border-[#d7c7ad] bg-[#fffaf1]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <button
            type="button"
            onClick={() => navigateHome('hero')}
            className="w-fit rounded-lg px-2 py-1 text-left focus:outline-none focus:ring-2 focus:ring-[#17456a]/30"
          >
            <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-[#17456a]">
              Naturbackstube
            </span>
            <span className="block text-2xl font-semibold tracking-tight text-[#263126]">
              Wiesender
            </span>
          </button>

          <nav
            aria-label="Hauptnavigation"
            className="flex flex-wrap items-center gap-2 text-sm text-[#526258]"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  if (item.view === 'products') {
                    openProducts();
                    return;
                  }

                  if (item.view === 'contact') {
                    openContact();
                    return;
                  }

                  if (item.view === 'career') {
                    openCareer();
                    return;
                  }

                  navigateHome(item.target);
                }}
                className="rounded-lg px-3 py-2 font-medium transition hover:bg-[#eadcc4] hover:text-[#17456a] focus:outline-none focus:ring-2 focus:ring-[#17456a]/30"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main id="content">
        {activeView === 'products' ? (
          <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#17456a]">
                  Sortiment
                </p>
                <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-[#263126] sm:text-5xl">
                  {activeProductCategory.title}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#526258]">
                  {activeProductCategory.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 rounded-lg border border-[#d7c7ad] bg-[#fffaf1] p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#263126]">
                    {visibleProducts.length} Produkte
                  </p>
                  <p className="text-sm text-[#526258]">Nach Kategorie filtern.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {productCategories.map(({ value, label }) => (
                    <button
                      key={value}
                      type="button"
                      aria-pressed={productFilter === value}
                      onClick={() => setProductFilter(value)}
                      className={`rounded-lg border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#17456a]/30 ${
                        productFilter === value
                          ? 'border-[#17456a] bg-[#17456a] text-white'
                          : 'border-[#d7c7ad] bg-[#fffaf1] text-[#526258] hover:bg-[#eadcc4] hover:text-[#17456a]'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {visibleProducts.map((product) => (
                <article
                  key={product.title}
                  className="group overflow-hidden rounded-lg border border-[#d7c7ad] bg-[#fffaf1] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-60 items-center justify-center overflow-hidden bg-[#f0e5d2]">
                    <img
                      src={product.image ?? productCategoryImages[product.category ?? 'brote']}
                      alt={product.title}
                      width="600"
                      height="600"
                      loading="lazy"
                      decoding="async"
                      className={`h-full w-full transition duration-300 group-hover:scale-105 ${
                        product.category ? 'object-cover' : 'object-contain p-5'
                      }`}
                    />
                  </div>
                  <div className="p-5">
                    <span
                      className={`inline-flex rounded-lg px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
                        product.isBio || product.badge === 'Saisonal'
                          ? 'bg-[#17456a] text-white'
                          : 'border border-[#d7c7ad] bg-[#f5efe4] text-[#526258]'
                      }`}
                    >
                      {product.badge ?? productCategoryMeta[product.category ?? 'brote'].label}
                    </span>
                    <h2 className="mt-4 text-xl font-semibold text-[#263126]">{product.title}</h2>
                    <p className="mt-2 text-sm font-semibold text-[#17456a]">{product.subtitle}</p>
                    <p className="mt-3 text-sm leading-6 text-[#526258]">{product.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : activeView === 'career' ? (
          <section className="bg-[#f5efe4]">
            <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-14">
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#17456a]">
                  Karriere bei Wiesender
                </p>
                <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.02] text-[#263126] sm:text-6xl">
                  Arbeiten, wo gutes Handwerk nach Zukunft schmeckt.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#526258]">
                  Bei Wiesender geht es um Menschen, echtes Backhandwerk und ein Team,
                  das gemeinsam anpackt. Ob Verkauf, Backstube, Büro oder Ausbildung:
                  hier zählt, wie du mitdenkst und miteinander arbeitest.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://www.wiesender.de/karriere/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-[#17456a] px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#24577c] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#17456a]/30 active:scale-[0.98]"
                  >
                    Offizielle Stellen ansehen
                  </a>
                  <button
                    type="button"
                    onClick={openContact}
                    className="rounded-lg border border-[#17456a]/30 bg-[#fffaf1] px-5 py-3 text-sm font-semibold text-[#17456a] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#eadcc4] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#17456a]/30 active:scale-[0.98]"
                  >
                    Kontakt aufnehmen
                  </button>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {careerStats.map(([title, text]) => (
                    <div key={title} className="rounded-lg border border-[#d7c7ad] bg-[#fffaf1] p-4">
                      <p className="text-sm font-semibold text-[#17456a]">{title}</p>
                      <p className="mt-1 text-sm text-[#526258]">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative min-h-[440px] overflow-hidden rounded-lg border border-[#d7c7ad] bg-[#e6d7be] shadow-lg sm:col-span-2">
                  <img
                    src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1400&q=82"
                    alt="Bäckerei-Team bei der Arbeit"
                    width="1400"
                    height="900"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#263126]/75 via-[#263126]/15 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-[#fffaf1]/95 p-5 shadow-sm backdrop-blur">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#17456a]">
                      Wiesi-Crew
                    </p>
                    <p className="mt-2 text-xl font-semibold text-[#263126]">
                      Ein Team, das Handwerk, Alltag und Entwicklung zusammenbringt.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <section className="border-y border-[#d7c7ad] bg-[#fffaf1]">
              <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#17456a]">
                    Wie wir arbeiten
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#263126] sm:text-4xl">
                    Alltagstauglich, fair und persönlich begleitet.
                  </h2>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {careerPrinciples.map((item) => (
                    <article key={item.title} className="rounded-lg border border-[#d7c7ad] bg-[#f5efe4] p-5">
                      <h3 className="text-xl font-semibold text-[#263126]">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[#526258]">{item.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#17456a]">
                    Arbeitsbereiche
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-[#263126] sm:text-4xl">
                    Viele Wege in die Wiesender Welt.
                  </h2>
                </div>
                <a
                  href="https://www.wiesender.de/karriere/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit rounded-lg border border-[#17456a]/30 bg-[#fffaf1] px-5 py-3 text-sm font-semibold text-[#17456a] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#eadcc4] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#17456a]/30 active:scale-[0.98]"
                >
                  Offene Stellen
                </a>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {careerRoles.map((role) => (
                  <article key={role.area} className="rounded-lg border border-[#d7c7ad] bg-[#fffaf1] p-5 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#17456a]">
                      {role.area}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-[#263126]">{role.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#526258]">{role.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="bg-[#263126] text-[#fffaf1]">
              <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f0d7aa]">
                    Stimmen aus dem Team
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                    Vertrauen, Entwicklung und echtes Miteinander.
                  </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {careerTestimonials.map((item) => (
                    <article key={item.name} className="rounded-lg border border-white/15 bg-white/10 p-6">
                      <p className="text-xl font-semibold leading-8">&ldquo;{item.quote}&rdquo;</p>
                      <p className="mt-5 font-semibold text-[#f0d7aa]">{item.name}</p>
                      <p className="text-sm text-[#e8dbc7]">{item.role}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
              <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#17456a]">
                    Impressionen
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#263126] sm:text-4xl">
                    Ein Blick in Verkauf, Backstube und Teamalltag.
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {careerGallery.map((item) => (
                    <article key={item.title} className="overflow-hidden rounded-lg border border-[#d7c7ad] bg-[#fffaf1] shadow-sm">
                      <img
                        src={item.image}
                        alt={item.title}
                        width="900"
                        height="700"
                        loading="lazy"
                        decoding="async"
                        className="h-56 w-full object-cover"
                      />
                      <p className="p-4 text-sm font-semibold text-[#263126]">{item.title}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 pb-14 lg:px-8">
              <div className="grid gap-6 rounded-lg border border-[#d7c7ad] bg-[#17456a] p-6 text-white shadow-sm lg:grid-cols-[1fr_0.8fr] lg:p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f0d7aa]">
                    Bereit für den nächsten Schritt?
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                    Finde heraus, welcher Platz im Team zu dir passt.
                  </h2>
                </div>
                <div className="flex flex-col justify-center gap-3 sm:flex-row lg:flex-col">
                  <a
                    href="https://www.wiesender.de/karriere/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-[#f0d7aa] px-5 py-3 text-center text-sm font-semibold text-[#263126] transition hover:-translate-y-0.5 hover:bg-[#ffe4b4] focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98]"
                  >
                    Offizielle Karriereseite öffnen
                  </a>
                  <button
                    type="button"
                    onClick={openContact}
                    className="rounded-lg border border-white/35 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98]"
                  >
                    Kontakt & Filialen
                  </button>
                </div>
              </div>
            </section>
          </section>
        ) : activeView === 'contact' ? (
          <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#17456a]">
                  Kontakt & Filialen
                </p>
                <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-[#263126] sm:text-5xl">
                  Alle Wiesender Stationen mit Adresse und Google Maps.
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#526258]">
                  Finde die nächste Backstube, öffne direkt die Route in Google Maps
                  oder kontaktiere die Zentrale für allgemeine Anfragen.
                </p>
              </div>

              <div className="rounded-lg border border-[#d7c7ad] bg-[#fffaf1] p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#17456a]">
                  Übersicht
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div>
                    <p className="text-3xl font-semibold text-[#263126]">{stationCount}</p>
                    <p className="text-sm text-[#526258]">Stationen</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-[#263126]">{stationGroups.length}</p>
                    <p className="text-sm text-[#526258]">Regionen</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-[#263126]">1</p>
                    <p className="text-sm text-[#526258]">Zentrale</p>
                  </div>
                </div>
              </div>
            </div>

            <article className="mt-10 grid gap-6 rounded-lg border border-[#d7c7ad] bg-[#17456a] p-6 text-white shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f0d7aa]">
                  {centralOffice.title}
                </p>
                <h2 className="mt-3 text-3xl font-semibold">{centralOffice.name}</h2>
                <p className="mt-4 text-base leading-7 text-[#f5e6cf]">{centralOffice.address}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={getMapUrl(centralOffice.address)}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/20 bg-white/10 p-5 transition hover:-translate-y-0.5 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  <p className="text-sm font-semibold text-[#f0d7aa]">Google Maps</p>
                  <p className="mt-2 font-semibold">Route zur Zentrale öffnen</p>
                </a>
                <div className="rounded-lg border border-white/20 bg-white/10 p-5">
                  <p className="text-sm font-semibold text-[#f0d7aa]">Kontakt</p>
                  <p className="mt-2">{centralOffice.phone}</p>
                  <p>{centralOffice.fax}</p>
                  <a className="transition hover:text-[#f0d7aa]" href={`mailto:${centralOffice.email}`}>
                    {centralOffice.email}
                  </a>
                </div>
              </div>
            </article>

            <div className="mt-10 space-y-10">
              {stationGroups.map((group) => (
                <section key={group.city} aria-labelledby={`${group.city}-stations`}>
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#17456a]">
                        Region
                      </p>
                      <h2 id={`${group.city}-stations`} className="text-3xl font-semibold text-[#263126]">
                        {group.city}
                      </h2>
                    </div>
                    <span className="w-fit rounded-lg border border-[#d7c7ad] bg-[#fffaf1] px-3 py-2 text-sm font-semibold text-[#526258]">
                      {group.stations.length} Stationen
                    </span>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {group.stations.map((station) => (
                      <article
                        key={`${group.city}-${station.name}`}
                        className="flex min-h-72 flex-col rounded-lg border border-[#d7c7ad] bg-[#fffaf1] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#17456a]">
                              {group.city}
                            </p>
                            <h3 className="mt-2 text-xl font-semibold text-[#263126]">{station.name}</h3>
                          </div>
                          <span className="rounded-lg bg-[#f5efe4] px-3 py-1 text-xs font-semibold text-[#526258]">
                            Filiale
                          </span>
                        </div>

                        <div className="mt-5 space-y-4 text-sm leading-6 text-[#526258]">
                          <div>
                            <p className="font-semibold text-[#263126]">Adresse</p>
                            <p>{station.address}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-[#263126]">Telefon</p>
                            <a className="transition hover:text-[#17456a]" href={`tel:${station.phone.replace(/[^\d+]/g, '')}`}>
                              {station.phone}
                            </a>
                          </div>
                          <div>
                            <p className="font-semibold text-[#263126]">Öffnungszeiten</p>
                            {station.hours.map((line) => (
                              <p key={line}>{line}</p>
                            ))}
                          </div>
                        </div>

                        <a
                          href={getMapUrl(station.address)}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-auto inline-flex w-fit rounded-lg bg-[#17456a] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#24577c] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#17456a]/30 active:scale-[0.98]"
                        >
                          In Google Maps öffnen
                        </a>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>
        ) : (
          <>
            <section
              id="hero"
              className="relative overflow-hidden bg-[#f5efe4]"
            >
              <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
                <div className="flex flex-col justify-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#17456a]">
                    Bio-Bäckerei aus Überzeugung
                  </p>
                  <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.02] text-[#263126] sm:text-6xl lg:text-7xl">
                    Natürlich gutes Brot. Jeden Tag frisch gedacht.
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-[#526258] sm:text-xl">
                    Die Naturbackstube Wiesender verbindet traditionelle Backkunst,
                    regionale Zutaten und moderne Ideen für echte Genussmomente.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={openProducts}
                      className="rounded-lg bg-[#17456a] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#24577c] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#17456a]/30 active:scale-[0.98]"
                    >
                      Sortiment ansehen
                    </button>
                    <button
                      type="button"
                      onClick={openContact}
                      className="rounded-lg border border-[#17456a]/30 bg-[#fffaf1] px-5 py-3 text-sm font-semibold text-[#17456a] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#eadcc4] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#17456a]/30 active:scale-[0.98]"
                    >
                      Kontakt aufnehmen
                    </button>
                  </div>

                  <div className="mt-10 grid gap-3 sm:grid-cols-3">
                    {[
                      ['Bio', 'Zutaten mit Herkunft'],
                      ['Handwerk', 'Sauerteig und Zeit'],
                      ['Regional', 'Nah verwurzelt'],
                    ].map(([title, text]) => (
                      <div key={title} className="rounded-lg border border-[#d7c7ad] bg-[#fffaf1] p-4">
                        <p className="text-sm font-semibold text-[#17456a]">{title}</p>
                        <p className="mt-1 text-sm text-[#526258]">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-[#d7c7ad] bg-[#e6d7be] shadow-lg">
                  <img
                    src={slides[activeSlide].image}
                    alt={slides[activeSlide].title}
                    width="1400"
                    height="900"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#263126]/70 via-[#263126]/15 to-transparent" />
                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                    <span className="rounded-lg bg-[#fffaf1]/95 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#17456a]">
                      {slides[activeSlide].label}
                    </span>
                    <span className="rounded-lg bg-[#17456a]/95 px-3 py-2 text-xs font-semibold text-white">
                      {String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="max-w-md rounded-lg bg-[#fffaf1]/95 p-5 shadow-sm backdrop-blur">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#17456a]">
                        {slides[activeSlide].title}
                      </p>
                      <p className="mt-2 text-xl font-semibold text-[#263126]">
                        {slides[activeSlide].text}
                      </p>
                    </div>
                    <div className="mt-4 flex gap-2">
                      {slides.map((slide, index) => (
                        <button
                          key={slide.title}
                          type="button"
                          aria-label={`Bild ${index + 1} anzeigen`}
                          onClick={() => setActiveSlide(index)}
                          className={`h-2.5 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white/70 ${
                            index === activeSlide ? 'w-10 bg-white' : 'w-2.5 bg-white/60 hover:bg-white'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="about" className="border-y border-[#d7c7ad] bg-[#fffaf1]">
              <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#17456a]">
                    Über Wiesender
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#263126] sm:text-4xl">
                    Eine Backstube für Menschen, die echtes Brot schätzen.
                  </h2>
                  <p className="mt-5 text-base leading-8 text-[#526258]">
                    Wiesender steht für ehrliche Rezepturen, sorgfältige Prozesse und
                    ein Sortiment, das Tradition und zeitgemäße Ernährung zusammenbringt.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {highlights.map((item) => (
                    <article key={item.title} className="rounded-lg border border-[#d7c7ad] bg-[#f5efe4] p-5">
                      <h3 className="text-lg font-semibold text-[#263126]">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[#526258]">{item.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="news" className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
              <div className="grid gap-8 rounded-lg bg-[#17456a] p-6 text-white shadow-sm lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f0d7aa]">
                    Aktuell
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                    Frische Highlights und Angebote aus der Backstube.
                  </h2>
                  <button
                    type="button"
                    onClick={openProducts}
                    className="mt-6 rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98]"
                  >
                    Produkte entdecken
                  </button>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {newsItems.map((item) => (
                    <article key={item.title} className="rounded-lg bg-[#fffaf1] p-5 text-[#263126]">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#17456a]">
                        {item.eyebrow}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[#526258]">{item.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="products" className="border-y border-[#d7c7ad] bg-[#fffaf1]">
              <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#17456a]">
                      Unsere Produkte
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold text-[#263126] sm:text-4xl">
                      Handwerklich. Regional. Natürlich.
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={openProducts}
                    className="w-fit rounded-lg border border-[#17456a]/30 bg-[#fffaf1] px-5 py-3 text-sm font-semibold text-[#17456a] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#eadcc4] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#17456a]/30 active:scale-[0.98]"
                  >
                    Komplettes Sortiment
                  </button>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                  {productTeasers.map(([title, text]) => (
                    <article key={title} className="rounded-lg border border-[#d7c7ad] bg-[#f5efe4] p-5">
                      <h3 className="text-xl font-semibold text-[#263126]">{title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[#526258]">{text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="learning-path" className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#17456a]">
                    Lehrpfad
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#263126] sm:text-4xl">
                    Backhandwerk verständlich, nahbar und erlebbar machen.
                  </h2>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {learningSteps.map((step, index) => (
                    <article key={step} className="rounded-lg border border-[#d7c7ad] bg-[#fffaf1] p-5">
                      <p className="text-sm font-semibold text-[#17456a]">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-3 text-lg font-semibold text-[#263126]">{step}</h3>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="career" className="bg-[#263126] text-[#fffaf1]">
              <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[1fr_0.8fr] lg:px-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f0d7aa]">
                    Karriere
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                    Werde Teil einer Backstube, die Qualität ernst nimmt.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[#e8dbc7]">
                    Ob Verkauf, Produktion oder Ausbildung: Wiesender sucht Menschen,
                    die gerne anpacken, lernen und guten Geschmack nach vorne bringen.
                  </p>
                  <button
                    type="button"
                    onClick={openCareer}
                    className="mt-6 rounded-lg border border-white/35 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98]"
                  >
                    Karriere entdecken
                  </button>
                </div>
                <div className="rounded-lg border border-white/15 bg-white/10 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f0d7aa]">
                    Einstieg
                  </p>
                  <p className="mt-3 text-2xl font-semibold">Ausbildung, Verkauf und Backstube</p>
                  <button
                    type="button"
                    onClick={openCareer}
                    className="mt-6 rounded-lg bg-[#f0d7aa] px-5 py-3 text-sm font-semibold text-[#263126] transition hover:-translate-y-0.5 hover:bg-[#ffe4b4] focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98]"
                  >
                    Interesse melden
                  </button>
                </div>
              </div>
            </section>

            <section id="contact" className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
              <div className="grid gap-6 rounded-lg border border-[#d7c7ad] bg-[#fffaf1] p-6 shadow-sm lg:grid-cols-[1fr_0.9fr] lg:p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#17456a]">
                    Kontakt
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#263126] sm:text-4xl">
                    Fragen, Bestellungen oder Zusammenarbeit?
                  </h2>
                  <p className="mt-5 text-base leading-8 text-[#526258]">
                    Die Naturbackstube freut sich über Anfragen rund um Produkte,
                    Filialen, Karriere und regionale Partnerschaften.
                  </p>
                  <button
                    type="button"
                    onClick={openContact}
                    className="mt-6 rounded-lg bg-[#17456a] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#24577c] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#17456a]/30 active:scale-[0.98]"
                  >
                    Alle Filialen & Maps
                  </button>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <a
                    href="https://www.wiesender.de/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-[#d7c7ad] bg-[#f5efe4] p-5 transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#17456a]/30"
                  >
                    <p className="text-sm font-semibold text-[#17456a]">Website</p>
                    <p className="mt-1 text-[#263126]">www.wiesender.de</p>
                  </a>
                  <a
                    href="mailto:info@wiesender.de"
                    className="rounded-lg border border-[#d7c7ad] bg-[#f5efe4] p-5 transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#17456a]/30"
                  >
                    <p className="text-sm font-semibold text-[#17456a]">E-Mail</p>
                    <p className="mt-1 text-[#263126]">info@wiesender.de</p>
                  </a>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="border-t border-[#d7c7ad] bg-[#fffaf1] px-5 py-8 text-sm text-[#526258] lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Naturbackstube Wiesender. Redesign-Konzept.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => navigateHome('hero')}
              className="transition hover:text-[#17456a] focus:outline-none focus:ring-2 focus:ring-[#17456a]/30"
            >
              Start
            </button>
            <button
              type="button"
              onClick={openProducts}
              className="transition hover:text-[#17456a] focus:outline-none focus:ring-2 focus:ring-[#17456a]/30"
            >
              Produkte
            </button>
            <button
              type="button"
              onClick={openCareer}
              className="transition hover:text-[#17456a] focus:outline-none focus:ring-2 focus:ring-[#17456a]/30"
            >
              Karriere
            </button>
            <button
              type="button"
              onClick={openContact}
              className="transition hover:text-[#17456a] focus:outline-none focus:ring-2 focus:ring-[#17456a]/30"
            >
              Kontakt
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
