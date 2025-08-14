import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export interface TruncatedTextProps {
   text: string;
   maxLength: number;
   showMoreText?: string;
   showLessText?: string;
}

export function truncateText(text: string, maxLength: number): string {
   if (text.length <= maxLength) {
      return text;
   }
   return text.slice(0, maxLength).trim() + '...';
}

export function shouldTruncate(text: string, maxLength: number): boolean {
   return text.length > maxLength;
}
