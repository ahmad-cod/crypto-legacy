import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => (
  <div className={`bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl ${className}`}>
    {children}
  </div>
);