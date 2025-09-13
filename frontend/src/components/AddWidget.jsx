import React, { useState, useEffect } from "react";
import useCategoriesStore from "../store/store";

function AddWidget() {
  const {
    categories,
    activeWidgets,
    addCategory,
    addWidget,
    activateWidget,
    deactivateWidget,
  } = useCategoriesStore();

  const [newCategory, setNewCategory] = useState("");
  const [newWidgetTitle, setNewWidgetTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activeTab, setActiveTab] = useState("");

  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showWidgetModal, setShowWidgetModal] = useState(false);

  // Keep local state in sync when categories change
  useEffect(() => {
    if (!selectedCategory && categories.length > 0) {
      setSelectedCategory(categories[0].category);
    }
    if (!activeTab && categories.length > 0) {
      setActiveTab(categories[0].category);
    }
  }, [categories]);

  const isWidgetActive = (categoryName, widget) =>
    activeWidgets.some(
      (w) => w.title === widget.title && w.category === categoryName
    );

  return (
    <div className="drawer drawer-end w-full">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* Button to open drawer */}
      <div className="w-full flex justify-center">
        <label htmlFor="my-drawer-4" className="btn">
          + Add Widget
        </label>
      </div>

      {/* Drawer Content */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div className="bg-base-200 text-base-content min-h-full w-96 p-4 relative">
          {/* ❌ Close Button for Drawer */}
          <label
            htmlFor="my-drawer-4"
            className="btn btn-sm btn-circle absolute right-4 top-4"
          >
            ✕
          </label>

          <h2 className="text-lg font-bold mb-4">Add Widget</h2>

          {/* Tabs for categories */}
          <div className="tabs tabs-bordered mb-4">
            {categories.map((cat) => (
              <a
                key={cat.category}
                className={`tab ${activeTab === cat.category ? "tab-active" : ""}`}
                onClick={() => setActiveTab(cat.category)}
              >
                {cat.category}
              </a>
            ))}
          </div>

          {/* Widgets inside active tab */}
          <div className="mt-4">
            {categories
              .find((c) => c.category === activeTab)
              ?.widgets.map((widget) => (
                <label
                  key={widget.title}
                  className="flex items-center gap-2 p-2 border rounded mb-2"
                >
                  <input
                    type="checkbox"
                    checked={isWidgetActive(activeTab, widget)}
                    onChange={(e) =>
                      e.target.checked
                        ? activateWidget(widget, activeTab)
                        : deactivateWidget(widget.title, activeTab)
                    }
                  />
                  {widget.title}
                </label>
              ))}
          </div>

          {/* FABs for adding */}
          <div className="fixed bottom-8 right-8 flex flex-col gap-4">
            {/* Add Category FAB */}
            <button
              className="btn btn-primary"
              onClick={() => setShowCategoryModal(true)}
            >
              + Add Category
            </button>

            {/* Add Widget FAB */}
            <button
              className="btn btn-secondary"
              onClick={() => setShowWidgetModal(true)}
            >
              + Add Widget
            </button>
          </div>

          {/* Category Modal */}
          {showCategoryModal && (
            <div className="modal modal-open">
              <div className="modal-box relative">
                {/* ❌ Close Button for Modal */}
                <button
                  className="btn btn-sm btn-circle absolute right-4 top-4"
                  onClick={() => setShowCategoryModal(false)}
                >
                  ✕
                </button>

                <h3 className="font-bold text-lg mb-4">Add New Category</h3>
                <input
                  type="text"
                  placeholder="Category Name"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="input input-bordered w-full mb-4"
                />
                <div className="modal-action">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      if (newCategory.trim()) {
                        addCategory(newCategory);
                        setActiveTab(newCategory);
                        setSelectedCategory(newCategory);
                        setNewCategory("");
                        setShowCategoryModal(false);
                      }
                    }}
                  >
                    Add
                  </button>
                  <button
                    className="btn btn-outline"
                    onClick={() => setShowCategoryModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Widget Modal */}
          {showWidgetModal && (
            <div className="modal modal-open">
              <div className="modal-box relative">
                {/* ❌ Close Button for Modal */}
                <button
                  className="btn btn-sm btn-circle absolute right-4 top-4"
                  onClick={() => setShowWidgetModal(false)}
                >
                  ✕
                </button>

                <h3 className="font-bold text-lg mb-4">Add New Widget</h3>
                <select
                  className="select select-bordered w-full mb-4"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  {categories.map((c) => (
                    <option key={c.category} value={c.category}>
                      {c.category}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Widget Title"
                  value={newWidgetTitle}
                  onChange={(e) => setNewWidgetTitle(e.target.value)}
                  className="input input-bordered w-full mb-4"
                />
                <div className="modal-action">
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      if (selectedCategory && newWidgetTitle.trim()) {
                        const newWidget = {
                          title: newWidgetTitle,
                          component: "Chart",
                          // data: { labels: [], series: [], colors: [] },
                        };
                        addWidget(selectedCategory, newWidget);
                        activateWidget(newWidget, selectedCategory);
                        setNewWidgetTitle("");
                        setShowWidgetModal(false);
                      }
                    }}
                  >
                    Add
                  </button>
                  <button
                    className="btn btn-outline"
                    onClick={() => setShowWidgetModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddWidget;
