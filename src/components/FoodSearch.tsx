
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FoodItem as FoodItemType } from "@/data/foodData";
import FoodItem from "./FoodItem";

interface FoodSearchProps {
  foods: FoodItemType[];
  onAddFood: (food: FoodItemType) => void;
}

const FoodSearch = ({ foods, onAddFood }: FoodSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          type="text"
          placeholder="Search foods..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-white"
        />
      </div>
      
      <div className="max-h-[400px] overflow-y-auto space-y-2 pr-1">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <FoodItem key={food.id} food={food} onAddClick={onAddFood} />
          ))
        ) : (
          <div className="text-center p-4 text-gray-500">
            No foods found. Try a different search term.
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodSearch;
