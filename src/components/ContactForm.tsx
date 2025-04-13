
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    // Reset form would be here in a real implementation
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1 block">
            Name
          </label>
          <Input 
            id="name" 
            placeholder="Your name" 
            required 
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">
            Email
          </label>
          <Input 
            id="email" 
            type="email" 
            placeholder="Your email" 
            required 
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-1 block">
          Subject
        </label>
        <Input 
          id="subject" 
          placeholder="How can we help you?" 
          required 
        />
      </div>
      
      <div>
        <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1 block">
          Message
        </label>
        <Textarea 
          id="message" 
          placeholder="Your message" 
          rows={4} 
          required 
        />
      </div>
      
      <Button type="submit" className="gradient-button text-white w-full md:w-auto">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
