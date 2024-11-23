import { Component, computed, input, signal } from '@angular/core';
import { ABOUT_MOCKS } from '../../shared/mocks/about.mock';
import { AboutModel } from './models/about.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  aboutData = signal<AboutModel>(ABOUT_MOCKS);

  title = computed(() => this.aboutData().title);
  subtitle = computed(() => this.aboutData().subtitle);
  profileImage = computed(() => this.aboutData().profileImage);
  cvLink = computed(() => this.aboutData().cvLink);
  socialLinks = computed(() => this.aboutData().socialLinks);
  textBlocks = computed(() => this.aboutData().textBlocks);

  customData = input<Partial<AboutModel>>();

  constructor() {
    if (this.customData()) {
      this.aboutData.update((current) => ({
        ...current,
        ...this.customData(),
      }));
    }
  }
}
