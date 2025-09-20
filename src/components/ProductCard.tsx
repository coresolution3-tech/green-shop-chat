import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, TreePine } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  ecoScore: number;
  carbonFootprint: string;
  ecoLabels: string[];
  description: string;
}

export const ProductCard = ({
  name,
  price,
  image,
  ecoScore,
  carbonFootprint,
  ecoLabels,
  description,
}: ProductCardProps) => {
  return (
    <Card className="glass shadow-eco transition-eco hover:shadow-glow hover-lift group cursor-pointer">
      <CardContent className="p-4">
        <div className="aspect-square relative mb-3 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-eco group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 flex items-center gap-1 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium animate-fade-in">
            <Leaf className="w-3 h-3" />
            {ecoScore}/100
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-card-foreground line-clamp-2">{name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          
          <div className="flex items-center gap-2 text-sm">
            <TreePine className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">{carbonFootprint} CO₂</span>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {ecoLabels.map((label) => (
              <Badge key={label} variant="secondary" className="text-xs">
                {label}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <span className="text-lg font-bold text-primary">${price}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};