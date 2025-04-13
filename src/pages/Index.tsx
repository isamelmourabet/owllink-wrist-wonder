
import React from 'react';
import Navbar from '@/components/Navbar';
import FeatureCard from '@/components/FeatureCard';
import ProductCard from '@/components/ProductCard';
import Testimonial from '@/components/Testimonial';
import ContactForm from '@/components/ContactForm';
import { Button } from "@/components/ui/button";
import { Heart, Battery, Watch, Activity, Cpu, ShieldCheck, Zap, Clock } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-hero-pattern bg-cover bg-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <span className="inline-block py-1 px-3 bg-owllink-pink/10 text-owllink-pink text-sm font-medium rounded-full mb-4">
                Pioneering Medical Wearables
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Intelligent <span className="gradient-text">Health Monitoring</span> at Your Wrist
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Owllink's smart wrist bands and watches provide continuous health monitoring with medical-grade accuracy, helping patients and healthcare providers track vital signs in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button className="gradient-button text-white px-8 py-6 text-lg">
                  Get Early Access
                </Button>
                <Button variant="outline" className="px-8 py-6 text-lg">
                  View Products
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 bg-gradient-to-br from-owllink-pink/20 to-owllink-blue/20 rounded-full absolute blur-xl animate-pulse-slow"></div>
                <img 
                  src="/wristband-health.png" 
                  alt="Owllink Smart Wristband" 
                  className="w-64 h-64 object-contain relative z-10 animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Health Monitoring Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our wearable devices come equipped with cutting-edge sensors and technology to provide accurate, real-time health data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              title="Heart Rate Monitoring" 
              description="Continuous heart rate tracking with medical-grade accuracy and abnormality alerts."
              icon={Heart}
            />
            <FeatureCard 
              title="Long Battery Life" 
              description="Up to 7 days of continuous use on a single charge with power-saving modes."
              icon={Battery}
            />
            <FeatureCard 
              title="Real-time Alerts" 
              description="Immediate notifications for critical health changes sent to you and your healthcare provider."
              icon={Activity}
            />
            <FeatureCard 
              title="Sleep Analysis" 
              description="Comprehensive sleep tracking with detailed insights on sleep quality and patterns."
              icon={Watch}
            />
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section id="products" className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Revolutionary Devices</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect Owllink device to suit your specific medical monitoring needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard 
              title="Wristband Health" 
              description="Our entry-level smart band for essential health tracking."
              image="/wristband-health.png"
              features={[
                "Heart rate monitoring",
                "Blood oxygen level",
                "Sleep tracking",
                "5-day battery life",
                "Water-resistant"
              ]}
              price="$149.99"
            />
            <ProductCard 
              title="SmartWatch Pro" 
              description="Advanced health monitoring with a full touch display."
              image="/smartwatch-pro.png"
              features={[
                "ECG capability",
                "Blood pressure monitoring",
                "Continuous glucose tracking",
                "Fall detection",
                "7-day battery life",
                "Medical-grade sensors"
              ]}
              price="$299.99"
              isFeatured={true}
            />
            <ProductCard 
              title="Wristband Max" 
              description="Our most advanced band with specialized medical features."
              image="/wristband-max.png"
              features={[
                "Advanced arrhythmia detection",
                "Remote monitoring capabilities",
                "Medication reminders",
                "Emergency SOS",
                "10-day battery life",
                "HIPAA-compliant data"
              ]}
              price="Coming Soon"
            />
          </div>
        </div>
      </section>
      
      {/* Medical Applications Section */}
      <section id="medical" className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-owllink-pink/5 to-owllink-blue/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Medical Applications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Owllink's wearable technology is designed for a wide range of medical applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="p-3 rounded-full bg-owllink-pink/10 h-fit">
                  <Heart className="h-6 w-6 text-owllink-pink" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Cardiac Monitoring</h3>
                  <p className="text-gray-600">
                    Continuous tracking of heart rhythm, rate, and abnormalities with alerts for potentially serious conditions.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="p-3 rounded-full bg-owllink-blue/10 h-fit">
                  <Zap className="h-6 w-6 text-owllink-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Chronic Disease Management</h3>
                  <p className="text-gray-600">
                    Helps patients with chronic conditions monitor vital signs and medication schedules while sharing data with healthcare providers.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="p-3 rounded-full bg-owllink-pink/10 h-fit">
                  <Clock className="h-6 w-6 text-owllink-pink" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Remote Patient Monitoring</h3>
                  <p className="text-gray-600">
                    Allows healthcare providers to monitor patients remotely, reducing hospital visits and enabling early intervention.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="p-3 rounded-full bg-owllink-blue/10 h-fit">
                  <Cpu className="h-6 w-6 text-owllink-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Clinical Trial Support</h3>
                  <p className="text-gray-600">
                    Provides accurate, continuous data collection for clinical trials with seamless integration into research databases.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="p-3 rounded-full bg-owllink-pink/10 h-fit">
                  <ShieldCheck className="h-6 w-6 text-owllink-pink" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Preventative Health</h3>
                  <p className="text-gray-600">
                    Helps identify potential health issues before they become serious through early warning algorithms and AI analysis.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="p-3 rounded-full bg-owllink-blue/10 h-fit">
                  <Activity className="h-6 w-6 text-owllink-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Post-Surgery Recovery</h3>
                  <p className="text-gray-600">
                    Monitors recovery progress after surgery, alerting medical staff to potential complications or setbacks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Medical Professionals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what healthcare providers and patients are saying about Owllink's medical wearables.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial 
              quote="Owllink has transformed how we monitor cardiac patients remotely. The accuracy of the data rivals our in-clinic equipment."
              author="Dr. Sarah Chen"
              role="Cardiologist"
            />
            <Testimonial 
              quote="As someone managing Type 2 diabetes, the continuous monitoring has helped me maintain better control of my blood glucose levels."
              author="Michael Rodriguez"
              role="Patient"
            />
            <Testimonial 
              quote="The data integration with our hospital systems is seamless. It's become an essential tool for our remote monitoring program."
              author="Dr. James Wilson"
              role="Chief of Telemedicine"
            />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-owllink-pink/5 to-owllink-blue/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Interested in Owllink for your medical practice or personal health monitoring? Reach out to our team for more information.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-owllink-pink/10 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-owllink-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">info@owllink.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-owllink-blue/10 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-owllink-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+1 (800) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-owllink-pink/10 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-owllink-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Early Access CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-owllink-pink to-owllink-blue">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Join Our Early Access Program</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Be among the first to experience Owllink's revolutionary medical wearables and help shape the future of remote health monitoring.
          </p>
          <Button className="bg-white text-owllink-pink hover:bg-white/90 px-8 py-6 text-lg">
            Get Early Access
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 bg-gray-900 text-white/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <circle cx="16" cy="16" r="16" fill="url(#gradient-footer)" />
                  <path d="M10 14C11.1046 14 12 13.1046 12 12C12 10.8954 11.1046 10 10 10C8.89543 10 8 10.8954 8 12C8 13.1046 8.89543 14 10 14Z" fill="white" />
                  <path d="M22 14C23.1046 14 24 13.1046 24 12C24 10.8954 23.1046 10 22 10C20.8954 10 20 10.8954 20 12C20 13.1046 20.8954 14 22 14Z" fill="white" />
                  <path d="M12 20C12 23.3137 13.7909 24 16 24C18.2091 24 20 23.3137 20 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient-footer" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ff80b6" />
                      <stop offset="1" stopColor="#57a7dd" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="font-bold text-xl">
                  <span className="text-owllink-pink">Owl</span>
                  <span className="text-owllink-blue">link</span>
                </span>
              </div>
              <p className="mb-4">
                Pioneering the future of medical wearables with continuous health monitoring technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-owllink-pink transition-colors">Wristband Health</a></li>
                <li><a href="#" className="hover:text-owllink-pink transition-colors">SmartWatch Pro</a></li>
                <li><a href="#" className="hover:text-owllink-pink transition-colors">Wristband Max</a></li>
                <li><a href="#" className="hover:text-owllink-pink transition-colors">Accessories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-owllink-pink transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-owllink-pink transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-owllink-pink transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-owllink-pink transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-owllink-pink transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-owllink-pink transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-owllink-pink transition-colors">Clinical Studies</a></li>
                <li><a href="#" className="hover:text-owllink-pink transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Owllink Medical Technologies. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-owllink-pink transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-owllink-pink transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-owllink-pink transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
