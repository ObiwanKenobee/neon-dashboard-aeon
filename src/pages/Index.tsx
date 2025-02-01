import { Sidebar } from "@/components/Sidebar";
import { PromptGenerator } from "@/components/PromptGenerator";
import { MarketTrends } from "@/components/MarketTrends";
import { ProductAdoption } from "@/components/ProductAdoption";
import { GTMPerformance } from "@/components/GTMPerformance";
import { SustainabilityMetrics } from "@/components/SustainabilityMetrics";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gradient-dark">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-gradient">
              Market Research Dashboard
            </h1>
          </div>
          
          <PromptGenerator />
          
          <div className="space-y-8">
            <MarketTrends />
            <ProductAdoption />
            <GTMPerformance />
            <SustainabilityMetrics />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;