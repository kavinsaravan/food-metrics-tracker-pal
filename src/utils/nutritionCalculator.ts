
import { FoodItem } from "../data/foodData";

export interface NutritionTotals {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export const calculateNutritionTotals = (
  loggedFoods: Array<{ food: FoodItem; quantity: number }>
): NutritionTotals => {
  return loggedFoods.reduce(
    (totals, item) => {
      return {
        calories: totals.calories + item.food.calories * item.quantity,
        protein: totals.protein + item.food.protein * item.quantity,
        carbs: totals.carbs + item.food.carbs * item.quantity,
        fat: totals.fat + item.food.fat * item.quantity,
      };
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );
};
