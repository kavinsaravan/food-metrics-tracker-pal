
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { FoodItem } from "@/data/foodData";

interface LoggedFoodItemProps {
  food: FoodItem;
  quantity: number;
  onRemove: () => void;
}

const LoggedFoodItem = ({ food, quantity, onRemove }: LoggedFoodItemProps) => {
  return (
    <div className="flex items-center justify-between p-3 border rounded-lg mb-2 bg-white">
      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-medium">{food.name}</h3>
          <span className="text-sm text-gray-500">
            {quantity > 1 ? `${quantity} × ` : ""}
            {food.serving}
          </span>
        </div>
        <p className="text-sm text-gray-600">
          {Math.round(food.calories * quantity)} cal | P: {(food.protein * quantity).toFixed(1)}g | 
          C: {(food.carbs * quantity).toFixed(1)}g | F: {(food.fat * quantity).toFixed(1)}g
        </p>
      </div>
      <Button
        size="sm"
        variant="ghost"
        onClick={onRemove}
        className="ml-2 text-red-500 hover:bg-red-50 hover:text-red-600 h-8 w-8 p-0"
      >
        <Trash2 size={16} />
      </Button>
    </div>
  );
};

export default LoggedFoodItem;
