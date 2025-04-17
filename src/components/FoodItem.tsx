
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { FoodItem as FoodItemType } from "@/data/foodData";

interface FoodItemProps {
  food: FoodItemType;
  onAddClick: (food: FoodItemType) => void;
}

const FoodItem = ({ food, onAddClick }: FoodItemProps) => {
  return (
    <div className="flex items-center justify-between p-3 border rounded-lg mb-2 bg-white hover:bg-gray-50 transition-colors">
      <div>
        <h3 className="font-medium">{food.name}</h3>
        <p className="text-sm text-gray-500">{food.serving}</p>
        <p className="text-sm text-gray-600">
          {food.calories} cal | P: {food.protein}g | C: {food.carbs}g | F:{" "}
          {food.fat}g
        </p>
      </div>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => onAddClick(food)}
        className="ml-4 hover:bg-purple-100 text-purple-600 rounded-full h-8 w-8 p-0"
      >
        <Plus size={18} />
      </Button>
    </div>
  );
};

export default FoodItem;
