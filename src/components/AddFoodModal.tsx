
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FoodItem } from "@/data/foodData";

interface AddFoodModalProps {
  food: FoodItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToLog: (food: FoodItem, quantity: number) => void;
}

const AddFoodModal = ({ food, isOpen, onClose, onAddToLog }: AddFoodModalProps) => {
  const [quantity, setQuantity] = useState(1);

  if (!food) return null;

  const handleSubmit = () => {
    onAddToLog(food, quantity);
    setQuantity(1);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add {food.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity" className="text-right">
              Servings
            </Label>
            <Input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min={0.25}
              step={0.25}
              max={10}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 p-2 bg-gray-50 rounded-md">
            <div>
              <p className="text-sm text-gray-500">Serving Size</p>
              <p className="font-medium">{food.serving}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Calories</p>
              <p className="font-medium">{Math.round(food.calories * quantity)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Protein</p>
              <p className="font-medium">{(food.protein * quantity).toFixed(1)}g</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Carbs</p>
              <p className="font-medium">{(food.carbs * quantity).toFixed(1)}g</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Fat</p>
              <p className="font-medium">{(food.fat * quantity).toFixed(1)}g</p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="bg-purple-600 hover:bg-purple-700">
            Add to Log
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddFoodModal;
