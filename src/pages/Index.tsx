import { ProductGrid } from "@/components/ProductGrid";
import { ChatInterface } from "@/components/ChatInterface";
import { EnvironmentalImpactWidget } from "@/components/EnvironmentalImpactWidget";
import { ActionButtons } from "@/components/ActionButtons";
import { Navigation } from "@/components/Navigation";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[calc(100vh-8rem)]">
          {/* Left Panel - Products */}
          <div className="lg:col-span-2 space-y-6 overflow-y-auto">
            <div className="animate-fade-in">
              <ProductGrid />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
              <EnvironmentalImpactWidget />
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
                <ActionButtons />
              </div>
            </div>
          </div>

          {/* Right Panel - Chat */}
          <div className="lg:col-span-1 animate-fade-in">
            <ChatInterface />
          </div>
        </div>
      </main>
      
      <Toaster />
    </div>
  );
};

export default Index;
