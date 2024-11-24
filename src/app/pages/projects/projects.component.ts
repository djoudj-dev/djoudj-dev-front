import { Component } from '@angular/core';
import { PROJECTS_MOCK } from '../../shared/mocks/projects.mock';
import { Project } from './models/project.model';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS_MOCK;

  onButtonClick() {
    // Logique à exécuter lors du clic sur le bouton
  }
}
