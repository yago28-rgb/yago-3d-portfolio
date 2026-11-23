// Edit this file to change the content of the whole portfolio.
// Images are read from /public, e.g. public/yago-portrait.jpg -> "/yago-portrait.jpg".

export const PROFILE = {
  name: 'Yago',
  headline: "Hi, i'm yago",
  tagline: 'a 3d creator driven by crafting striking and unforgettable projects',
  portrait: '/yago-portrait.jpg',
  // Leave empty to hide the mailto link until you add your address.
  email: '',
  about:
    'I build websites, brand identities and interactive 3D experiences for businesses in Madrid. I work with WebGL and Three.js, take brands from concept to a full visual system, and develop custom websites in TypeScript and React. I am also building Kodea, a digitalization company for other businesses.',
};

export const SERVICES = [
  {
    number: '01',
    name: 'Web Design',
    description:
      'Custom websites with clean layouts, careful typography, clear hierarchy and a user experience built around the visitor.',
  },
  {
    number: '02',
    name: 'Branding',
    description:
      'Complete brand identity: concept, brand DNA, visual system and manifesto, from the first idea to the final guidelines.',
  },
  {
    number: '03',
    name: '3D Web Experiences',
    description:
      'Interactive 3D scenes running in the browser with WebGL and Three.js, integrated into the website of your business.',
  },
  {
    number: '04',
    name: 'Business Digitalization',
    description:
      'Moving paper-based processes to digital tools: digital menus, quotes, business plans and web mockups.',
  },
  {
    number: '05',
    name: 'Development',
    description:
      'Web applications built with React, TypeScript and Tailwind CSS, deployed on Vercel or on your own server.',
  },
];

export interface Project {
  number: string;
  category: string;
  name: string;
  status: string;
  description: string;
  // Public link, if the project is online. Leave undefined otherwise.
  url?: string;
  // Source code on GitHub, if public.
  repo?: string;
  // Three images: two stacked on the left, one tall on the right.
  images: [string, string, string];
}

const GH = 'https://github.com/yago28-rgb/';

// Images follow the pattern /projects/<slug>-1.jpg, -2.jpg, -3.jpg (desktop, section, mobile).
const shots = (slug: string): [string, string, string] => [
  `/projects/${slug}-1.jpg`,
  `/projects/${slug}-2.jpg`,
  `/projects/${slug}-3.jpg`,
];

type ProjectInput = Omit<Project, 'number'>;

const LIST: ProjectInput[] = [
  // ── Websites for businesses ──
  {
    category: 'Web Design',
    name: 'NEPO Café',
    status: 'Website',
    description:
      'Multi-page website for NEPO, a specialty coffee house in Pozuelo de Alarcón: editorial design, menu, about and visit pages, and local SEO. Plain HTML, CSS and JavaScript with no build step.',
    repo: `${GH}nepo-cafe`,
    images: shots('nepo'),
  },
  {
    category: 'Web Design',
    name: 'Villa Mercedes',
    status: 'Website',
    description:
      'Static website for the Villa Mercedes holiday rental in Spanish, English and French, generated with a small Python build script and optimised for SEO.',
    repo: `${GH}villa-mercedes-web`,
    images: shots('villa-mercedes'),
  },
  {
    category: 'Branding & Web',
    name: 'Opale',
    status: 'In development',
    description:
      'Brand identity and website for Opale, a specialty coffee and matcha café in central Madrid. Includes a full brand document and a 3D WebGL facade scene built with Three.js.',
    images: shots('opale'),
  },
  {
    category: 'Web Design',
    name: 'Cadelo',
    status: 'Concept',
    description:
      'Website concept for Cadelo, a fusion restaurant in Santander with a Michelin Bib Gourmand: menu, gallery and contact pages built with Next.js.',
    images: shots('cadelo'),
  },
  {
    category: 'Web Redesign',
    name: 'Storyframe Studio',
    status: 'Proposal',
    description:
      'Redesign proposal for the website of Storyframe Studio, a photography studio in Madrid. Presented as a mockup with placeholder photos until the final images are available.',
    images: shots('storyframe'),
  },
  {
    category: 'Branding & Web',
    name: 'ESTHELA',
    status: 'Concept',
    description:
      'A digital archive dedicated to perfumery rather than a perfume shop: brand, editorial pages for perfumes and houses, and a custom logo system. Built with Next.js and TypeScript.',
    repo: `${GH}fragance-lab`,
    images: shots('esthela'),
  },
  {
    category: 'E-commerce',
    name: 'Racket Lab',
    status: 'In development',
    description:
      'Luxury e-commerce for rackets with an editorial home page, a video-led hero and a real-time WebGL centre court. Next.js, TypeScript and SEO.',
    repo: `${GH}Racket-Lab`,
    images: shots('racket-lab'),
  },

  // ── Web apps ──
  {
    category: 'Web App',
    name: 'Taflox',
    status: 'Private tool',
    description:
      'Management and accounting app for the owner of several taxi licences in Madrid: upload invoices, read them with a local OCR engine (PaddleOCR, no paid AI APIs), review them side by side and export to Excel.',
    repo: `${GH}flota-taxis`,
    images: shots('flota'),
  },
  {
    category: 'AI & Finance',
    name: 'Verdant Capital',
    status: 'Personal project',
    description:
      'Autonomous paper-trading platform: a multi-agent system that watches real markets, analyses news and fundamentals, validates strategies out of sample and manages a 100% simulated portfolio. Python backend, web dashboard and Docker.',
    repo: `${GH}aifund`,
    images: shots('aifund'),
  },
  {
    category: 'Web App',
    name: 'Nosotros',
    status: 'Online',
    description:
      'Web app for sharing messages inside groups linked by a code. It started as an app for couples and is now used by friends and family. A redesign and a mobile version are in progress.',
    url: 'https://nosotros-peach.vercel.app',
    images: shots('nosotros'),
  },
  {
    category: 'Web App',
    name: 'Weyvy',
    status: 'Personal project',
    description:
      'Fitness app with workouts, progress and charts. React, TypeScript, Vite, Tailwind and Recharts, with data stored locally and a Supabase schema ready.',
    repo: `${GH}weyvy`,
    images: shots('weyvy'),
  },
  {
    category: 'Mobile App (PWA)',
    name: 'Panel DAW+DAM',
    status: 'In use',
    description:
      'Installable app to keep track of exams and assignments at ESIC. Works offline as a PWA, in a single HTML file.',
    repo: `${GH}esic-tareas`,
    images: shots('esic-tareas'),
  },
  {
    category: 'Mobile App (PWA)',
    name: 'Gastos ESIC',
    status: 'In use',
    description:
      'Installable expense tracker that works offline as a PWA: categories, monthly summary and movements, in a single HTML file.',
    repo: `${GH}gastosesic`,
    images: shots('gastosesic'),
  },
  {
    category: 'Web App',
    name: 'Mis gastos',
    status: 'In use',
    description:
      'Expense tracker with an iOS-style design: monthly overview, budget, categories and movements.',
    repo: `${GH}mis-gastos`,
    images: shots('mis-gastos'),
  },
  {
    category: 'Dashboard',
    name: 'Mercados del día',
    status: 'Personal project',
    description:
      'Daily summary of stocks, investments and cryptocurrencies with charts and sources, generated automatically every day.',
    images: shots('crypto'),
  },

  // ── Games and 3D ──
  {
    category: '3D Game',
    name: 'Backrooms: Level 0',
    status: 'Playable',
    description:
      'First-person psychological survival horror set in Level 0 of the Backrooms. Every 3D asset is generated in Blender 5.1 with Python scripts and runs in the browser with Three.js.',
    repo: `${GH}backrooms`,
    images: shots('backrooms'),
  },
  {
    category: '3D Game',
    name: 'Sombras de Ashvern',
    status: 'In development',
    description:
      'Dark fantasy 3D game that runs in the browser, with environments and assets built in Blender through a scripted pipeline and rendered with Three.js.',
    repo: `${GH}sombras-de-ashvern`,
    images: shots('sombras-de-ashvern'),
  },
  {
    category: 'Game',
    name: 'CarGo',
    status: 'Personal project',
    description: 'Browser car game with a catalogue of 100 cars, built in HTML, CSS and JavaScript.',
    images: shots('car-go'),
  },
  {
    category: 'Interactive Web',
    name: 'Hollowmere',
    status: 'Experiment',
    description:
      'Interactive story of a king who sold his crown to the moon and the long descent to bring the light home, told as a scroll-driven interactive web experience.',
    images: shots('hollowmere'),
  },
  {
    category: '3D Web Experience',
    name: 'Medusa JF-4',
    status: 'Experiment',
    description: 'A robotic jellyfish you can take apart piece by piece, built live in Three.js.',
    images: shots('medusa'),
  },
  {
    category: 'Interactive Web',
    name: 'Try the Look',
    status: 'Experiment',
    description:
      'Fashion runway with six looks styled head to toe. Explore the runway, isolate a look and tap a pin to see each piece.',
    images: shots('closet'),
  },

  // ── Branding and academic ──
  {
    category: 'Branding',
    name: 'Mecanautas',
    status: 'Brand identity',
    description:
      'Brand identity for a YouTube channel: logo system, brand board, banner, avatar and thumbnail template.',
    images: shots('mecanautas'),
  },
  {
    category: 'Final Project · DAW',
    name: 'Origen',
    status: 'Academic',
    description:
      'My final degree project: an immersive 3D website for a specialty coffee shop with a first-person walkthrough, a model baked in Blender, and a PHP and SQL back end.',
    repo: `${GH}cafeteria-origen-tfg`,
    images: shots('cafeteria-origen'),
  },
];

export const PROJECTS: Project[] = LIST.map((p, i) => ({
  ...p,
  number: String(i + 1).padStart(2, '0'),
}));
