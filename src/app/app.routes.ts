import { Routes } from '@angular/router';

export interface MenuItem {
  route: string;
  label: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { route: '/about', label: 'À propos' },
  { route: '/projects', label: 'Réalisations' },
  { route: '/stack', label: 'Compétences' },
  { route: '/contact', label: 'Contact' },
];

export const routes: Routes = [];
