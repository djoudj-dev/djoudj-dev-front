import { Component, signal, inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private platformId = inject(PLATFORM_ID);
  isDarkTheme = signal(this.getInitialTheme());

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
}
