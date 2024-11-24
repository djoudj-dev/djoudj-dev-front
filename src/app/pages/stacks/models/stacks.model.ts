export interface StackItem {
  name: string;
  icon: string;
  url: string;
}

export interface Stack {
  title: string;
  icon: string;
  items: StackItem[];
}
