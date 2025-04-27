
import { useState } from "react";
import MetricsDashboard from "@/components/MetricsDashboard";
import FoodSearch from "@/components/FoodSearch";
import AddFoodModal from "@/components/AddFoodModal";
import LoggedFoodItem from "@/components/LoggedFoodItem";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { foodDatabase, FoodItem } from "@/data/foodData";
import { calculateNutritionTotals } from "@/utils/nutritionCalculator";
import { PlusCircle, Utensils, Quiz } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  const [loggedFoods, setLoggedFoods] = useState<Array<{ food: FoodItem; quantity: number }>>([]);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("search");

  const nutritionTotals = calculateNutritionTotals(loggedFoods);

  const handleAddFood = (food: FoodItem) => {
    setSelectedFood(food);
    setIsModalOpen(true);
  };

  const handleAddToLog = (food: FoodItem, quantity: number) => {
    setLoggedFoods([...loggedFoods, { food, quantity }]);
  };

  const handleRemoveFood = (index: number) => {
    const newLoggedFoods = [...loggedFoods];
    newLoggedFoods.splice(index, 1);
    setLoggedFoods(newLoggedFoods);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-md mx-auto px-4">
        <header className="py-6">
          <h1 className="text-3xl font-bold text-center text-purple-700">NutriTrack</h1>
          <p className="text-center text-gray-500">Your personal food logger</p>
          <Button 
            variant="link" 
            className="mx-auto mt-2 text-purple-600 flex items-center gap-1"
          >
            <Quiz className="h-4 w-4" />
            Take a personalized quiz
          </Button>
        </header>

        <Card className="p-6 mb-6 shadow-md border-none">
          <MetricsDashboard nutritionTotals={nutritionTotals} />
        </Card>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Food Log</h2>
          <Button 
            onClick={() => setActiveTab("search")} 
            variant="outline" 
            size="sm"
            className="flex items-center gap-1 text-purple-600 border-purple-200"
          >
            <PlusCircle size={16} />
            Add Food
          </Button>
        </div>

        {loggedFoods.length > 0 ? (
          <div className="mb-6 space-y-2">
            {loggedFoods.map((item, index) => (
              <LoggedFoodItem
                key={`${item.food.id}-${index}`}
                food={item.food}
                quantity={item.quantity}
                onRemove={() => handleRemoveFood(index)}
              />
            ))}
          </div>
        ) : (
          <Card className="p-8 mb-6 text-center border-dashed border-2 bg-white">
            <Utensils className="mx-auto mb-2 text-gray-400" size={32} />
            <p className="text-gray-500">No foods logged yet</p>
            <p className="text-sm text-gray-400">Add foods from the search tab below</p>
          </Card>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="log">My Log</TabsTrigger>
            <TabsTrigger value="search">Search Foods</TabsTrigger>
          </TabsList>
          
          <TabsContent value="log" className="mt-0">
            {loggedFoods.length === 0 ? (
              <div className="text-center p-8">
                <p className="text-gray-500">Your food log is empty</p>
                <Button 
                  onClick={() => setActiveTab("search")} 
                  className="mt-4 bg-purple-600 hover:bg-purple-700"
                >
                  Search for Food
                </Button>
              </div>
            ) : (
              <div>
                <Separator className="my-4" />
                <div className="flex justify-between text-sm text-gray-500 px-2">
                  <span>Total:</span>
                  <span>
                    {Math.round(nutritionTotals.calories)} cal | 
                    P: {Math.round(nutritionTotals.protein)}g | 
                    C: {Math.round(nutritionTotals.carbs)}g | 
                    F: {Math.round(nutritionTotals.fat)}g
                  </span>
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="search" className="mt-0">
            <FoodSearch foods={foodDatabase} onAddFood={handleAddFood} />
          </TabsContent>
        </Tabs>

        <AddFoodModal
          food={selectedFood}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddToLog={handleAddToLog}
        />
      </div>
      <BottomNav />
    </div>
  );
};

export default Index;
