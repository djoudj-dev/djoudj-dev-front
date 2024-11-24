import { Component } from '@angular/core';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { StacksComponent } from './pages/stacks/stacks.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, AboutComponent, StacksComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'djoudj-dev-front';
}
