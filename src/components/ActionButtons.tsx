import { Button } from "@/components/ui/button";
import { ShoppingCart, TrendingUp } from "lucide-react";

export const ActionButtons = () => {
  return (
    <div className="space-y-3">
      <Button className="w-full eco-gradient transition-eco hover:shadow-glow hover-lift font-medium">
        <ShoppingCart className="w-4 h-4 mr-2" />
        Shop Sustainably
      </Button>
      
      <Button variant="outline" className="w-full transition-eco hover:shadow-eco hover-lift">
        <TrendingUp className="w-4 h-4 mr-2" />
        View Impact Report
      </Button>
    </div>
  );
};