import { SocialLink } from './social-link.model';
import { TextBlock } from './text-block.model';

export interface AboutModel {
  title: string;
  subtitle: string;
  profileImage: string;
  cvLink: string;
  socialLinks: SocialLink[];
  textBlocks: TextBlock[];
}
