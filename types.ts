import { LucideIcon } from 'lucide-react';

export interface Room {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}
