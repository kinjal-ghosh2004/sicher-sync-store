import { Laptop, Smartphone, Watch, Headphones, Shield, Monitor } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Laptops",
    icon: Laptop,
    count: "24+ Products",
    color: "text-blue-600"
  },
  {
    id: 2,
    name: "Smartphones",
    icon: Smartphone,
    count: "18+ Products", 
    color: "text-green-600"
  },
  {
    id: 3,
    name: "Smartwatches",
    icon: Watch,
    count: "12+ Products",
    color: "text-purple-600"
  },
  {
    id: 4,
    name: "Audio",
    icon: Headphones,
    count: "15+ Products",
    color: "text-orange-600"
  },
  {
    id: 5,
    name: "Security",
    icon: Shield,
    count: "8+ Products",
    color: "text-red-600"
  },
  {
    id: 6,
    name: "Monitors",
    icon: Monitor,
    count: "10+ Products",
    color: "text-indigo-600"
  }
];

const Categories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our comprehensive range of security-focused technology products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id}
                className="group hover:shadow-card-hover transition-smooth cursor-pointer border-border hover:border-primary/30"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-surface rounded-full group-hover:bg-primary/10 transition-smooth">
                      <IconComponent className={`h-8 w-8 ${category.color} group-hover:scale-110 transition-smooth`} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;