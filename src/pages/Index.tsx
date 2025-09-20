import { ProductGrid } from "@/components/ProductGrid";
import { ChatInterface } from "@/components/ChatInterface";
import { EnvironmentalImpactWidget } from "@/components/EnvironmentalImpactWidget";
import { ActionButtons } from "@/components/ActionButtons";
import { Leaf } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">EcoShop Assistant</h1>
              <p className="text-sm text-muted-foreground">Your sustainable shopping companion</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-120px)]">
          {/* Left Panel - Products */}
          <div className="lg:col-span-2 space-y-6 overflow-y-auto">
            <ProductGrid />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <EnvironmentalImpactWidget />
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
                <ActionButtons />
              </div>
            </div>
          </div>

          {/* Right Panel - Chat */}
          <div className="lg:col-span-1">
            <ChatInterface />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
