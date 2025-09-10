import { create } from "zustand";
import categoriesData from "../data/categories.json"; // move your JSON here

const useCategoriesStore = create((set) => ({
  categories: categoriesData,
  setCategories: (newCategories) => set({ categories: newCategories }),
}));

export default useCategoriesStore;
