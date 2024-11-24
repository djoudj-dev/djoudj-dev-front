import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      [ngClass]="buttonClasses"
      (click)="onClick()"
      class="inline-flex items-center rounded-md bg-primary dark:bg-accent px-2.5 py-2 text-xs font-medium text-text dark:text-dark-text ring-1 ring-inset ring-text dark:ring-dark-text transition-transform duration-300 transform hover:scale-105"
    >
      @if(iconSrc) {
      <img [src]="iconSrc" alt="icon" class="w-6 h-6 mr-2 dark:invert" />
      }
      {{ text }}
    </button>
  `,
})
export class ButtonComponent {
  @Input() text: string = 'Button';
  @Input() buttonClasses: string = '';
  @Input() iconSrc: string = '';
  @Output() clickEvent = new EventEmitter<void>();

  onClick() {
    this.clickEvent.emit();
  }
}
