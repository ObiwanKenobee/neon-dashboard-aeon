import { Home, ShoppingBag, Crown, Sparkles, Sofa, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: ShoppingBag, label: "E-Commerce", href: "#" },
  { icon: Crown, label: "Luxury & Fashion", href: "#" },
  { icon: Sparkles, label: "Beauty", href: "#" },
  { icon: Sofa, label: "Furniture", href: "#" },
  { icon: TrendingUp, label: "Market Trends", href: "#" },
];

export const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-panel border-r border-glass p-4">
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-8 h-8 rounded-full bg-primary animate-glow" />
        <h1 className="text-white text-xl font-bold">MarketAI</h1>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center space-x-3 px-4 py-3 rounded-lg",
              "text-gray-300 hover:text-white hover:bg-glass transition-all",
              "group"
            )}
          >
            <item.icon className="w-5 h-5 group-hover:text-primary" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};