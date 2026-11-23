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
  // Three images: two stacked on the left, one tall on the right.
  images: [string, string, string];
}

export const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Branding & Web',
    name: 'Opale',
    status: 'In development',
    description:
      'Brand identity and website for Opale, a specialty coffee and matcha café in central Madrid. Includes a full brand document and a 3D WebGL facade scene built with Three.js.',
    images: ['/projects/opale-1.jpg', '/projects/opale-2.jpg', '/projects/opale-3.jpg'],
  },
  {
    number: '02',
    category: 'Web Redesign',
    name: 'Storyframe Studio',
    status: 'Proposal',
    description:
      'Redesign proposal for the website of Storyframe Studio, a photography studio in Madrid. Presented as a mockup with placeholder photos until the final images are available.',
    images: [
      '/projects/storyframe-1.jpg',
      '/projects/storyframe-2.jpg',
      '/projects/storyframe-3.jpg',
    ],
  },
  {
    number: '03',
    category: 'Web App',
    name: 'Nosotros',
    status: 'Online',
    description:
      'Web app for sharing messages inside groups linked by a code. It started as an app for couples and is now used by friends and family. A redesign and a mobile version are in progress.',
    url: 'https://nosotros-peach.vercel.app',
    images: ['/projects/nosotros-1.jpg', '/projects/nosotros-2.jpg', '/projects/nosotros-3.jpg'],
  },
];
