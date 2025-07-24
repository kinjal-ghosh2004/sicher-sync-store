import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-dark to-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Sicherheit</h3>
            <p className="text-blue-100 leading-relaxed">
              Leading provider of secure technology solutions for businesses and individuals worldwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-blue-100 hover:text-white hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-100 hover:text-white hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-100 hover:text-white hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-100 hover:text-white hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Products", "Categories", "About Us", "Contact", "Support"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-blue-100 hover:text-white transition-smooth">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              {["Help Center", "Shipping Info", "Returns", "Privacy Policy", "Terms of Service"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-blue-100 hover:text-white transition-smooth">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-blue-100 mb-4">
              Subscribe to get special offers and security updates
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              />
              <Button className="w-full bg-white text-primary hover:bg-blue-50">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 justify-self-start">
              <Mail className="h-5 w-5 text-blue-200" />
              <span className="text-blue-100">contact@sicherheit.tech</span>
            </div>

            <div className="flex items-center space-x-3 justify-self-center">
              <Phone className="h-5 w-5 text-blue-200" />
              <span className="text-blue-100">+91-XXXXXXXXXX</span>
            </div>

            <div className="flex items-center space-x-3 justify-self-end">
              <MapPin className="h-5 w-5 text-blue-200" />
              <span className="text-blue-100">Bengaluru, Karnataka, India</span>
            </div>
          </div>
        </div>



        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-blue-100">
          <p>&copy; 2024 Sicherheit Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;