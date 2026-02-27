import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-base font-bold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer";
  
  const variants = {
    primary: "bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 focus:ring-orange-500",
    secondary: "bg-white hover:bg-stone-50 text-stone-900 shadow-md hover:shadow-lg focus:ring-stone-200",
    outline: "border border-stone-200 text-stone-800 hover:bg-stone-50 hover:border-stone-300 focus:ring-stone-500 bg-transparent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
