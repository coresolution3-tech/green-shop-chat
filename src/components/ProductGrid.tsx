import { ProductCard } from "./ProductCard";
import ecoWaterBottle from "@/assets/eco-water-bottle.jpg";
import ecoToteBag from "@/assets/eco-tote-bag.jpg";
import ecoPhoneCase from "@/assets/eco-phone-case.jpg";
import ecoSkincare from "@/assets/eco-skincare.jpg";

const mockProducts = [
  {
    id: "1",
    name: "Bamboo Stainless Steel Water Bottle",
    price: 29.99,
    image: ecoWaterBottle,
    ecoScore: 92,
    carbonFootprint: "0.5kg",
    ecoLabels: ["Plastic-Free", "Sustainable", "BPA-Free"],
    description: "Durable bamboo and stainless steel water bottle that keeps drinks cold for 24 hours and hot for 12 hours.",
  },
  {
    id: "2",
    name: "Organic Cotton Tote Bag",
    price: 18.50,
    image: ecoToteBag,
    ecoScore: 88,
    carbonFootprint: "0.8kg",
    ecoLabels: ["Organic", "Fair Trade", "Reusable"],
    description: "100% organic cotton tote bag with hemp handles. Perfect for grocery shopping and daily use.",
  },
  {
    id: "3",
    name: "Sustainable Bamboo Phone Case",
    price: 24.99,
    image: ecoPhoneCase,
    ecoScore: 85,
    carbonFootprint: "0.3kg",
    ecoLabels: ["Biodegradable", "Natural", "Compostable"],
    description: "Protective phone case made from sustainably sourced bamboo with precision cutouts.",
  },
  {
    id: "4",
    name: "Organic Skincare Essential Set",
    price: 45.00,
    image: ecoSkincare,
    ecoScore: 94,
    carbonFootprint: "1.2kg",
    ecoLabels: ["Organic", "Cruelty-Free", "Zero Waste"],
    description: "Complete skincare set with organic ingredients in reusable glass containers.",
  },
];

export const ProductGrid = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Eco-Friendly Products</h2>
        <span className="text-sm text-muted-foreground">{mockProducts.length} sustainable items</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};