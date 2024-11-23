import { Routes } from '@angular/router';

export interface MenuItem {
  route: string;
  label: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { route: '/about', label: 'À propos' },
  { route: '/projects', label: 'Projets' },
  { route: '/stack', label: 'Stacks' },
  { route: '/contact', label: 'Contact' },
];

export const routes: Routes = [];
