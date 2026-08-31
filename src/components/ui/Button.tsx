import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
}

export function Button({ variant = 'primary', className, href, children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium transition-colors rounded focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-primary/90",
    secondary: "bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100",
    outline: "border border-gray-200 text-gray-900 hover:border-brand-primary/50 hover:text-brand-primary"
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
