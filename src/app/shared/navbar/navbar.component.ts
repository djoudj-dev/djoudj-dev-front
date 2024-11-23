import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MENU_ITEMS, MenuItem } from '../../../app.routes';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private platformId = inject(PLATFORM_ID); // Injection de l'identifiant de la plateforme
  isDarkTheme = signal(this.getInitialTheme()); // Signal pour gérer le thème sombre
  isMenuOpen = false; // État pour savoir si le menu est ouvert
  menuItems: MenuItem[] = MENU_ITEMS; // Liste des éléments du menu

  private getInitialTheme(): boolean {
    // Détermine le thème initial en fonction du stockage local
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  }

  toggleDarkTheme() {
    // Bascule entre le thème clair et sombre
    this.isDarkTheme.update((value) => !value);
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', this.isDarkTheme() ? 'dark' : 'light');
    }
  }

  toggleMenu() {
    // Bascule l'état d'ouverture du menu
    this.isMenuOpen = !this.isMenuOpen;
  }
}
