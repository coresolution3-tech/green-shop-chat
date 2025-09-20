import { useState } from "react";
import { Menu, X, User, ShoppingCart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";

export const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    toast({
      title: isLoggedIn ? "Logged out successfully" : "Welcome back!",
      description: isLoggedIn ? "Come back soon for more eco-friendly shopping" : "Ready to shop sustainably",
    });
  };

  const menuItems = [
    { icon: User, label: "Profile", action: () => toast({ title: "Profile", description: "View your eco-profile" }) },
    { icon: Clock, label: "Purchase History", action: () => toast({ title: "Purchase History", description: "Your sustainable shopping journey" }) },
    { icon: ShoppingCart, label: "Shopping Cart", action: () => toast({ title: "Shopping Cart", description: "0 eco-friendly items" }) },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg eco-gradient flex items-center justify-center shadow-eco">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-foreground">EcoShop</h1>
            <p className="text-xs text-muted-foreground">Sustainable Shopping</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              size="sm"
              onClick={item.action}
              className="gap-2 transition-eco hover:bg-primary/10"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Button>
          ))}
          
          <Button
            onClick={handleLogin}
            className="ml-2 eco-gradient text-white shadow-eco transition-eco hover:shadow-glow"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            onClick={handleLogin}
            size="sm"
            className="eco-gradient text-white shadow-eco"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
          
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 glass">
              <SheetHeader>
                <SheetTitle className="text-foreground">Menu</SheetTitle>
              </SheetHeader>
              
              <div className="mt-6 space-y-4">
                {menuItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    className="w-full justify-start gap-3 h-12 transition-eco hover:bg-primary/10"
                    onClick={() => {
                      item.action();
                      setIsMenuOpen(false);
                    }}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};