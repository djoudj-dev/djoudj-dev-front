import { SocialLink } from './social-link.model';
import { TextBlock } from './text-block.model';

export interface AboutModel {
  name: string;
  subname: string;
  profileImage: string;
  cvLink: string;
  socialLinks: SocialLink[];
  textBlocks: TextBlock[];
}
