export interface Ebook {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  price: string;
  image?: string;
}

export const ebooks: Ebook[] = [
  {
    id: 'e1',
    title: 'Gentle Mindfulness Practices',
    slug: 'gentle-mindfulness-practices',
    excerpt:
      'Short, practical mindfulness exercises to bring calm and clarity into daily life — perfect for beginners and busy schedules alike.',
    price: '$9.99',
    image: '/assets/ebook-placeholder-1.svg',
  },
];

export default ebooks;
