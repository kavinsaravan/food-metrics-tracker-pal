
// Mock food database with nutrition information
export interface FoodItem {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  serving: string;
}

export const foodDatabase: FoodItem[] = [
  {
    id: "1",
    name: "Apple",
    calories: 95,
    protein: 0.5,
    carbs: 25,
    fat: 0.3,
    serving: "1 medium (182g)"
  },
  {
    id: "2",
    name: "Chicken Breast",
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    serving: "100g"
  },
  {
    id: "3",
    name: "Brown Rice",
    calories: 216,
    protein: 5,
    carbs: 45,
    fat: 1.8,
    serving: "1 cup cooked (195g)"
  },
  {
    id: "4",
    name: "Salmon",
    calories: 206,
    protein: 22,
    carbs: 0,
    fat: 13,
    serving: "100g"
  },
  {
    id: "5",
    name: "Avocado",
    calories: 240,
    protein: 3,
    carbs: 12,
    fat: 22,
    serving: "1 medium (150g)"
  },
  {
    id: "6",
    name: "Egg",
    calories: 72,
    protein: 6.3,
    carbs: 0.4,
    fat: 5,
    serving: "1 large (50g)"
  },
  {
    id: "7",
    name: "Greek Yogurt",
    calories: 100,
    protein: 17,
    carbs: 6,
    fat: 0.4,
    serving: "175g"
  },
  {
    id: "8",
    name: "Banana",
    calories: 105,
    protein: 1.3,
    carbs: 27,
    fat: 0.4,
    serving: "1 medium (118g)"
  },
  {
    id: "9",
    name: "Spinach",
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fat: 0.4,
    serving: "100g"
  },
  {
    id: "10",
    name: "Oatmeal",
    calories: 150,
    protein: 5,
    carbs: 27,
    fat: 2.5,
    serving: "1 cup cooked (234g)"
  },
  {
    id: "11",
    name: "Sweet Potato",
    calories: 112,
    protein: 2,
    carbs: 26,
    fat: 0.1,
    serving: "1 medium (130g)"
  },
  {
    id: "12",
    name: "Almonds",
    calories: 164,
    protein: 6,
    carbs: 6,
    fat: 14,
    serving: "28g (1oz)"
  }
];
