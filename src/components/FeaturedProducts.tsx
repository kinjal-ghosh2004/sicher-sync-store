import { Star, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import laptopProduct from "@/assets/laptop-product.jpg";
import phoneProduct from "@/assets/phone-product.jpg";
import watchProduct from "@/assets/watch-product.jpg";

const products = [
  {
    id: 1,
    name: "SecureBook Pro",
    description: "Ultra-secure laptop with enterprise-grade encryption",
    price: 2499,
    originalPrice: 2799,
    rating: 4.9,
    reviews: 128,
    image: laptopProduct,
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "SafePhone Elite",
    description: "Military-grade secure smartphone for professionals",
    price: 1299,
    originalPrice: 1499,
    rating: 4.8,
    reviews: 94,
    image: phoneProduct,
    badge: "New"
  },
  {
    id: 3,
    name: "GuardWatch Pro",
    description: "Smart security watch with biometric authentication",
    price: 599,
    originalPrice: 699,
    rating: 4.7,
    reviews: 76,
    image: watchProduct,
    badge: "Limited"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular security-focused technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-card-hover transition-smooth border-border hover:border-primary/30 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {product.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-smooth">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-foreground">
                        ${product.price}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-green-600">
                      Save ${product.originalPrice - product.price}
                    </span>
                  </div>

                  <Button className="w-full group">
                    <ShoppingCart className="mr-2 h-4 w-4 group-hover:scale-110 transition-smooth" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="elegant" size="lg" className="group">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;