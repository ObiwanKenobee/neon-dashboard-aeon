import { Users, Activity, Heart, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const adoptionData = [
  { label: "Retention Rate", value: "78%", icon: Users, color: "text-primary" },
  { label: "Usage Frequency", value: "Daily", icon: Activity, color: "text-cyber" },
  { label: "NPS Score", value: "72", icon: Heart, color: "text-cyber" },
  { label: "Feature Adoption", value: "85%", icon: Zap, color: "text-eco" },
];

export const ProductAdoption = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gradient">Product Adoption & Engagement</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {adoptionData.map((item) => (
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