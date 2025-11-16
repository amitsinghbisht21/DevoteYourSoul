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
  {
    id: 'e2',
    title: 'Finding Your Soul Path',
    slug: 'finding-your-soul-path',
    excerpt:
      'A compassionate guide to discovering purpose and direction when life feels uncertain, with exercises, reflections, and journaling prompts.',
    price: '$12.99',
    image: '/assets/ebook-placeholder-2.svg',
  },
  {
    id: 'e3',
    title: 'Wisdom of Action',
    slug: 'wisdom-of-action',
    excerpt:
      'Practical lessons drawn from classical texts on how to act with integrity and release attachment to results in daily work and service.',
    price: '$8.99',
    image: '/assets/ebook-placeholder-3.svg',
  },
  {
    id: 'e4',
    title: 'Calm in Crisis',
    slug: 'calm-in-crisis',
    excerpt:
      'Breathwork and nervous-system practices to steady the mind in stressful moments — a short workbook with exercises you can try immediately.',
    price: '$7.99',
    image: '/assets/ebook-placeholder-1.svg',
  },
  {
    id: 'e5',
    title: 'Signs & Synchronicity',
    slug: 'signs-and-synchronicity',
    excerpt:
      'How to notice and test intuitive nudges, synchronicities, and gentle confirmations — a reflective guide with real-life examples and exercises.',
    price: '$10.99',
    image: '/assets/ebook-placeholder-2.svg',
  },
  {
    id: 'e6',
    title: 'Inner Leadership',
    slug: 'inner-leadership',
    excerpt:
      'Short practices for mastering the inner battlefield: journaling, micro-meditations, and experiments to shift habitual reactivity into wise responses.',
    price: '$11.99',
    image: '/assets/ebook-placeholder-3.svg',
  },
];

export default ebooks;
