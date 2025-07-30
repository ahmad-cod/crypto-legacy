import { ReactNode } from "react";


type ButtonVariant = 'primary' | 'secondary' | 'success';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  loading?: boolean;
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  loading = false 
}: ButtonProps) => {
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
    secondary: "bg-white/10 hover:bg-white/20 border border-white/30",
    success: "bg-green-600 hover:bg-green-700"
  };

  return (
    <button 
      onClick={onClick}
      className={`${variants[variant]} text-white font-semibold py-3 px-8 rounded-lg transform hover:scale-105 transition-all duration-200 ${loading ? 'opacity-50' : ''}`}
      disabled={loading}
    >
      {loading ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mx-auto" /> : children}
    </button>
  );
};