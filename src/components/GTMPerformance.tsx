import { DollarSign, TrendingUp, Target, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const gtmData = [
  { label: "Conversion Rate", value: "3.2%", icon: TrendingUp, color: "text-primary" },
  { label: "CAC", value: "$42", icon: DollarSign, color: "text-cyber" },
  { label: "LTV", value: "$850", icon: Users, color: "text-eco" },
  { label: "Trial-to-Paid", value: "28%", icon: Target, color: "text-primary" },
];

export const GTMPerformance = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gradient">Go-To-Market Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {gtmData.map((item) => (
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