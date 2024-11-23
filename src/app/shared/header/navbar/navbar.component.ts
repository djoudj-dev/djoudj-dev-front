import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem, MENU_ITEMS } from '../../../app.routes';

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
  menuItems: MenuItem[] = MENU_ITEMS;

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
