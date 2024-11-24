import { Project } from '../../pages/projects/models/project.model';
import { STACKS_MOCK } from './stacks.mock';

// Fonction utilitaire pour trouver un item de stack par son nom
const findStackItem = (name: string) => {
  for (const stack of STACKS_MOCK) {
    const item = stack.items.find((item) => item.name === name);
    if (item) return item;
  }
  return null;
};

export const PROJECTS_MOCK: Project[] = [
  {
    title: 'Project 1',
    image: 'assets/images/angular-logo.png',
    description: 'Project 1 description',
    url: 'https://www.google.com',
    created_at: '2021-01-01',
    updated_at: '2021-01-01',
    stacks: [
      findStackItem('Angular'),
      findStackItem('TypeScript'),
      findStackItem('Tailwind'),
    ].filter((item) => item !== null),
  },
  {
    title: 'Project 2',
    image: 'assets/images/angular-logo.png',
    description: 'Project 2 description',
    url: 'https://www.google.com',
    created_at: '2021-01-01',
    updated_at: '2021-01-01',
    stacks: [
      findStackItem('Angular'),
      findStackItem('TypeScript'),
      findStackItem('Node.js'),
    ].filter((item) => item !== null),
  },
  {
    title: 'Project 3',
    image: 'assets/images/angular-logo.png',
    description: 'Project 3 description',
    url: 'https://www.google.com',
    created_at: '2021-01-01',
    updated_at: '2021-01-01',
    stacks: [
      findStackItem('Angular'),
      findStackItem('TypeScript'),
      findStackItem('Tailwind'),
      findStackItem('Nest.js'),
    ].filter((item) => item !== null),
  },
];
