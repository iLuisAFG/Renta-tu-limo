import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { type BreadcrumbItem } from '@/lib/schema';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Migas de pan" className="w-full py-3 mb-6 border-b border-white/5">
      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-sans text-platinum-muted">
        {items.map((crumb, idx) => {
          const isLast = idx === items.length - 1;
          const isFirst = idx === 0;

          return (
            <li key={crumb.url} className="inline-flex items-center gap-1.5 sm:gap-2">
              {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-platinum-muted/50 shrink-0" />}
              {isLast ? (
                <span className="text-[#DDB789] font-medium truncate max-w-[240px] sm:max-w-none" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <a
                  href={crumb.url.replace('https://rentalimosina.com', '') || '/'}
                  className="hover:text-platinum-light transition-colors inline-flex items-center gap-1"
                >
                  {isFirst && <Home className="w-3.5 h-3.5" />}
                  <span>{crumb.name}</span>
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
