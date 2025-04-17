
import { Card } from "@/components/ui/card";
import { NutritionTotals } from "@/utils/nutritionCalculator";

interface MetricsDashboardProps {
  nutritionTotals: NutritionTotals;
}

const MetricsDashboard = ({ nutritionTotals }: MetricsDashboardProps) => {
  const metrics = [
    {
      label: "Calories",
      value: Math.round(nutritionTotals.calories),
      color: "bg-purple-100",
      textColor: "text-purple-700",
      unit: "kcal",
    },
    {
      label: "Protein",
      value: Math.round(nutritionTotals.protein),
      color: "bg-blue-100",
      textColor: "text-blue-700",
      unit: "g",
    },
    {
      label: "Carbs",
      value: Math.round(nutritionTotals.carbs),
      color: "bg-green-100",
      textColor: "text-green-700",
      unit: "g",
    },
    {
      label: "Fat",
      value: Math.round(nutritionTotals.fat),
      color: "bg-yellow-100",
      textColor: "text-yellow-700",
      unit: "g",
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Today's Nutrition</h2>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric) => (
          <Card
            key={metric.label}
            className={`p-4 ${metric.color} border-none shadow-md transition-all hover:shadow-lg`}
          >
            <p className="text-sm font-medium text-gray-600">{metric.label}</p>
            <div className="flex items-baseline space-x-1">
              <p className={`text-2xl font-bold ${metric.textColor}`}>
                {metric.value}
              </p>
              <p className="text-sm text-gray-500">{metric.unit}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MetricsDashboard;
