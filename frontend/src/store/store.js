import { create } from "zustand";
import categoriesData from "../data/categories.json"; // fallback initial data

// Load categories from localStorage (or fallback to JSON)
const storedCategories = JSON.parse(localStorage.getItem("categories"));
const initialCategories = storedCategories || categoriesData;

// Load activeWidgets from localStorage (or fallback to derived from categories)
const storedActiveWidgets = JSON.parse(localStorage.getItem("activeWidgets"));
const initialActiveWidgets =
  storedActiveWidgets ||
  initialCategories.flatMap((c) =>
    c.widgets.map((w) => ({ ...w, category: c.category }))
  );

const useCategoriesStore = create((set) => ({
  categories: initialCategories,
  activeWidgets: initialActiveWidgets,

  // Replace all categories
  setCategories: (newCategories) => {
    localStorage.setItem("categories", JSON.stringify(newCategories));
    set({ categories: newCategories });
  },

  // Add a new category
  addCategory: (newCategory) =>
    set((state) => {
      const updated = [
        ...state.categories,
        { category: newCategory, widgets: [] },
      ];
      localStorage.setItem("categories", JSON.stringify(updated));
      return { ...state, categories: updated };
    }),

  // Remove category + clear its active widgets
  removeCategory: (categoryName) =>
    set((state) => {
      const updatedCategories = state.categories.filter(
        (c) => c.category !== categoryName
      );
      const updatedActive = state.activeWidgets.filter(
        (w) => w.category !== categoryName
      );
      localStorage.setItem("categories", JSON.stringify(updatedCategories));
      localStorage.setItem("activeWidgets", JSON.stringify(updatedActive));
      return {
        ...state,
        categories: updatedCategories,
        activeWidgets: updatedActive,
      };
    }),

  // Add widget to a category
  addWidget: (categoryName, newWidget) =>
    set((state) => {
      const updatedCategories = state.categories.map((c) =>
        c.category === categoryName
          ? { ...c, widgets: [...c.widgets, newWidget] }
          : c
      );
      localStorage.setItem("categories", JSON.stringify(updatedCategories));
      return { ...state, categories: updatedCategories };
    }),

  // Remove widget from category + active list
  removeWidget: (categoryName, widgetTitle) =>
    set((state) => {
      const updatedCategories = state.categories.map((c) =>
        c.category === categoryName
          ? {
              ...c,
              widgets: c.widgets.filter((w) => w.title !== widgetTitle),
            }
          : c
      );
      const updatedActive = state.activeWidgets.filter(
        (w) => !(w.title === widgetTitle && w.category === categoryName)
      );
      localStorage.setItem("categories", JSON.stringify(updatedCategories));
      localStorage.setItem("activeWidgets", JSON.stringify(updatedActive));
      return {
        ...state,
        categories: updatedCategories,
        activeWidgets: updatedActive,
      };
    }),

  // Activate widget (show on dashboard)
  activateWidget: (widget, categoryName) =>
    set((state) => {
      const alreadyActive = state.activeWidgets.some(
        (w) => w.title === widget.title && w.category === categoryName
      );
      if (alreadyActive) return state;
      const updatedActive = [
        ...state.activeWidgets,
        { ...widget, category: categoryName },
      ];
      localStorage.setItem("activeWidgets", JSON.stringify(updatedActive));
      return { ...state, activeWidgets: updatedActive };
    }),

  // Deactivate widget (hide from dashboard)
  deactivateWidget: (widgetTitle, categoryName) =>
    set((state) => {
      const updatedActive = state.activeWidgets.filter(
        (w) => !(w.title === widgetTitle && w.category === categoryName)
      );
      localStorage.setItem("activeWidgets", JSON.stringify(updatedActive));
      return { ...state, activeWidgets: updatedActive };
    }),
}));

export default useCategoriesStore;
