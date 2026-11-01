import React from 'react';
import { ConditionCategory, Language } from '../types';
import { getCategoryTheme } from '../data/categoryThemes';

interface CategoryBadgeProps {
  category: ConditionCategory | string;
  currentLang?: Language;
  size?: 'xs' | 'sm' | 'md';
  showDot?: boolean;
  className?: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  category,
  currentLang = 'en',
  size = 'sm',
  showDot = true,
  className = '',
}) => {
  const theme = getCategoryTheme(category);
  const label = theme.name[currentLang] || category;

  const sizeClasses = {
    xs: 'text-[11px] px-2.5 py-0.5 gap-1.5 font-medium',
    sm: 'text-xs px-3 py-1 gap-2 font-semibold',
    md: 'text-xs sm:text-sm px-3.5 py-1.5 gap-2 font-semibold',
  }[size];

  return (
    <span
      className={`inline-flex items-center rounded-full whitespace-nowrap transition-all duration-200 select-none shadow-2xs hover:shadow-xs ${sizeClasses} ${className}`}
      style={{
        backgroundColor: theme.hex.bg,
        borderColor: theme.hex.border,
        borderWidth: '1px',
        borderStyle: 'solid',
        color: theme.hex.text,
      }}
    >
      {showDot && (
        <span className="relative flex items-center justify-center shrink-0 w-2 h-2" aria-hidden="true">
          <span
            className="absolute inline-flex h-full w-full rounded-full opacity-40 animate-ping"
            style={{ backgroundColor: theme.hex.dot }}
          />
          <span
            className="relative inline-flex rounded-full w-1.5 h-1.5"
            style={{ backgroundColor: theme.hex.dot }}
          />
        </span>
      )}
      <span className="tracking-tight">{label}</span>
    </span>
  );
};
