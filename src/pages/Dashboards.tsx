
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChartContainer } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";
import BottomNav from "@/components/BottomNav";

const Dashboards = () => {
  // Sample data for the empty radial chart
  const data = [{ value: 0 }, { value: 100 }];
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-md mx-auto px-4">
        <header className="py-6">
          <h1 className="text-3xl font-bold text-center text-purple-700">Dashboards</h1>
          <p className="text-center text-gray-500">Track your nutrition goals</p>
        </header>

        <Card className="p-6 mb-6 shadow-md">
          <CardHeader className="p-0 mb-4">
            <CardTitle>Calories</CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex flex-row gap-6">
            <div className="w-1/2 flex items-center justify-center">
              <ChartContainer config={{}} className="h-48 w-48">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                  >
                    <Cell key="cell-0" fill="#9b87f5" />
                    <Cell key="cell-1" fill="#E2E8F0" />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </div>
            <div className="w-1/2">
              <div className="space-y-4">
                <div className="grid grid-cols-3 items-center gap-2">
                  <span className="text-sm font-medium">Goal:</span>
                  <Input className="col-span-2" placeholder="0" />
                </div>
                <div className="grid grid-cols-3 items-center gap-2">
                  <span className="text-sm font-medium">Remaining:</span>
                  <Input className="col-span-2" placeholder="0" />
                </div>
                <div className="grid grid-cols-3 items-center gap-2">
                  <span className="text-sm font-medium">Consumed:</span>
                  <Input className="col-span-2" placeholder="0" />
                </div>
                <div className="grid grid-cols-3 items-center gap-2">
                  <span className="text-sm font-medium">Burned:</span>
                  <Input className="col-span-2" placeholder="0" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <BottomNav />
    </div>
  );
};

export default Dashboards;
