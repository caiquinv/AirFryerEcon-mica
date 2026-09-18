export interface Recipe {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  time: string;
  ingredientsCount: number;
  image: string;
  difficulty: 'Muito Fácil' | 'Fácil' | 'Médio';
  calories: string;
  description: string;
  ingredients: string[];
  steps: string[];
  portugueseRegion?: string;
}

export interface BonusItem {
  id: string;
  title: string;
  subtitle: string;
  originalPrice: string;
  image: string;
  tag: string;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  message: string;
  dishName?: string;
  dishImage?: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
