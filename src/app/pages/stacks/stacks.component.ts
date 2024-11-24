import { Component } from '@angular/core';
import { STACKS_MOCK } from '../../shared/mocks/stacks.mock';
import { Stack } from './models/stacks.model';

@Component({
  selector: 'app-stacks',
  imports: [],
  standalone: true,
  templateUrl: './stacks.component.html',
})
export class StacksComponent {
  stacks: Stack[] = STACKS_MOCK;
}
