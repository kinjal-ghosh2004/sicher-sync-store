import { ArrowRight, Shield, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Secure Your
            <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent text-[60px] leading-[1.2] pb-2">
              Digital Future
            </span>

          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Premium technology solutions designed for the modern world. 
            Experience unparalleled security, performance, and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" className="group">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="bg-primary text-white border-none hover:bg-primary-dark group">
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-blue-100">
              <Shield className="h-6 w-6" />
              <span className="font-medium">Enterprise Security</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-blue-100">
              <Truck className="h-6 w-6" />
              <span className="font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-blue-100">
              <Award className="h-6 w-6" />
              <span className="font-medium">2 Year Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;