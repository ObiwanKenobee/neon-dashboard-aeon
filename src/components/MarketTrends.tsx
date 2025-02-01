import { TrendingUp, Users, Target, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const trendData = [
  { label: "Search Trends", value: "+24%", icon: Search },
  { label: "Social Mentions", value: "1.2K", icon: Users },
  { label: "Market Gap Score", value: "8.5", icon: Target },
  { label: "Competitor Activity", value: "High", icon: TrendingUp },
];

export const MarketTrends = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gradient">Market Trends & Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {trendData.map((item) => (
          <Card key={item.label} className="glass-panel">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-white/70">
                {item.label}
              </CardTitle>
              <item.icon className="h-4 w-4 text-primary" />
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