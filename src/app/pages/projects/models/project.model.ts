import { StackItem } from '../../stacks/models/stacks.model';

export interface Project {
  title: string;
  image: string;
  description: string;
  url: string;
  created_at: string;
  updated_at: string;
  stacks: StackItem[];
}
