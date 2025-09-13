import { create } from "zustand";
import categoriesData from "../data/categories.json"; // initial data

const useCategoriesStore = create((set) => ({
  categories: categoriesData,

  // Initialize activeWidgets with all widgets by default
  activeWidgets: categoriesData.flatMap((c) =>
    c.widgets.map((w) => ({ ...w, category: c.category }))
  ),

  // Replace all categories
  setCategories: (newCategories) => set({ categories: newCategories }),

  // Add a new category
  addCategory: (newCategory) =>
    set((state) => ({
      ...state,
      categories: [...state.categories, { category: newCategory, widgets: [] }],
    })),

  // Remove category + clear its active widgets
  removeCategory: (categoryName) =>
    set((state) => ({
      ...state,
      categories: state.categories.filter((c) => c.category !== categoryName),
      activeWidgets: state.activeWidgets.filter(
        (w) => w.category !== categoryName
      ),
    })),

  // Add widget to a category
  addWidget: (categoryName, newWidget) =>
    set((state) => ({
      ...state,
      categories: state.categories.map((c) =>
        c.category === categoryName
          ? { ...c, widgets: [...c.widgets, newWidget] }
          : c
      ),
    })),

  // Remove widget from category + active list
  removeWidget: (categoryName, widgetTitle) =>
    set((state) => ({
      ...state,
      categories: state.categories.map((c) =>
        c.category === categoryName
          ? {
              ...c,
              widgets: c.widgets.filter((w) => w.title !== widgetTitle),
            }
          : c
      ),
      activeWidgets: state.activeWidgets.filter(
        (w) => !(w.title === widgetTitle && w.category === categoryName)
      ),
    })),

  // Activate widget (show on dashboard)
  activateWidget: (widget, categoryName) =>
    set((state) => {
      const alreadyActive = state.activeWidgets.some(
        (w) => w.title === widget.title && w.category === categoryName
      );
      if (alreadyActive) return state;
      return {
        ...state,
        activeWidgets: [
          ...state.activeWidgets,
          { ...widget, category: categoryName },
        ],
      };
    }),

  // Deactivate widget (hide from dashboard)
  deactivateWidget: (widgetTitle, categoryName) =>
    set((state) => ({
      ...state,
      activeWidgets: state.activeWidgets.filter(
        (w) => !(w.title === widgetTitle && w.category === categoryName)
      ),
    })),
}));

export default useCategoriesStore;
