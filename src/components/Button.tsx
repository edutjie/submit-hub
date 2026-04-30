import { cn } from '../lib/utils';
import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 1 | 2;
  size?: 'default' | 'nav';
};

export const Button = ({ variant, size = 'default', className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-[8px] transition-opacity hover:opacity-90",
        size === 'default' ? "min-w-[202px] py-[9px] px-[11px] text-lg font-semibold tracking-[-0.005em]" : "px-[19px] py-[10px] text-xl font-medium",
        variant === 1 ? "bg-bright-indigo text-white border-transparent" : "bg-transparent text-bright-indigo border-[2px] border-lavender",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
