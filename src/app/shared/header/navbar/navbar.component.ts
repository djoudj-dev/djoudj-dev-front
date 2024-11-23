import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
  route: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private platformId = inject(PLATFORM_ID);
  isDarkTheme = signal(this.getInitialTheme());
  isMenuOpen = false;

  menuItems: MenuItem[] = [
    { route: '/about', label: 'À propos' },
    { route: '/projects', label: 'Projets' },
    { route: '/stack', label: 'Stacks' },
    { route: '/contact', label: 'Contact' },
  ];

  private getInitialTheme(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  }

  toggleDarkTheme() {
    this.isDarkTheme.update((value) => !value);
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', this.isDarkTheme() ? 'dark' : 'light');
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
