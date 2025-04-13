
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  price: string;
  isFeatured?: boolean;
  className?: string;
}

const ProductCard = ({ 
  title, 
  description, 
  image, 
  features, 
  price, 
  isFeatured = false,
  className 
}: ProductCardProps) => {
  return (
    <div className={cn(
      "rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl",
      isFeatured ? "border-owllink-pink bg-white" : "border-gray-200 bg-white",
      className
    )}>
      {isFeatured && (
        <div className="w-full bg-owllink-pink text-white text-center py-2">
          <span className="font-medium">Most Popular</span>
        </div>
      )}
      <div className="p-6">
        <div className="flex flex-col items-center mb-6">
          <img 
            src={image} 
            alt={title} 
            className="w-48 h-48 object-contain mb-4"
          />
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-600 text-center mt-2">{description}</p>
        </div>
        
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-owllink-blue mr-2"></div>
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center pt-4 border-t border-gray-100">
          <div className="mb-4">
            <span className="text-2xl font-bold">{price}</span>
            {price !== "Coming Soon" && <span className="text-gray-500 ml-1">/unit</span>}
          </div>
          <Button className={
            isFeatured 
              ? "gradient-button text-white w-full" 
              : "bg-owllink-blue hover:bg-owllink-blue/90 text-white w-full"
          }>
            {price === "Coming Soon" ? "Join Waitlist" : "Pre-order Now"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
