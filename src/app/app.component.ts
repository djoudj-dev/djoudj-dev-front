import { Component } from '@angular/core';
import { NavbarComponent } from './shared/header/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'djoudj-dev-front';
}
