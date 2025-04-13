
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
  className?: string;
}

const Testimonial = ({ quote, author, role, image, className }: TestimonialProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col",
      className
    )}>
      <div className="mb-4">
        <svg className="h-8 w-8 text-owllink-pink opacity-70" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div className="mt-auto flex items-center">
        {image && (
          <img 
            src={image} 
            alt={author} 
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
        )}
        {!image && (
          <div className="w-10 h-10 rounded-full mr-3 bg-gradient-to-br from-owllink-pink to-owllink-blue flex items-center justify-center text-white font-medium">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-medium text-gray-900">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
