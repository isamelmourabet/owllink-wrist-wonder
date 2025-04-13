
import React from 'react';
import { cn } from "@/lib/utils";
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  translationKey?: {
    title: string;
    description: string;
  };
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  className,
  translationKey 
}: FeatureCardProps) => {
  return (
    <div className={cn(
      "flex flex-col items-center p-6 rounded-2xl bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]",
      className
    )}>
      <div className="p-3 rounded-full bg-gradient-to-br from-owllink-pink to-owllink-blue mb-4">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
