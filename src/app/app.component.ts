import { Component } from '@angular/core';
import { AboutComponent } from './pages/about/about/about.component';
import { NavbarComponent } from './shared/header/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'djoudj-dev-front';
}
