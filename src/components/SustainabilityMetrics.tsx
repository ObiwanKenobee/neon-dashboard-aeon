import { Leaf, Shield, Recycle, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sustainabilityData = [
  { label: "ESG Score", value: "92/100", icon: Shield, color: "text-eco" },
  { label: "Carbon Footprint", value: "-12%", icon: Leaf, color: "text-eco" },
  { label: "Recycled Materials", value: "78%", icon: Recycle, color: "text-eco" },
  { label: "Supply Chain", value: "Verified", icon: Truck, color: "text-eco" },
];

export const SustainabilityMetrics = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gradient">Sustainability & Ethics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sustainabilityData.map((item) => (
          <Card key={item.label} className="glass-panel">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-white/70">
                {item.label}
              </CardTitle>
              <item.icon className={`h-4 w-4 ${item.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{item.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};