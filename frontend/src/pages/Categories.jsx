import React from "react";
import Chart from "../components/Chart";
import Widget from "../components/Widget";
import DashboardNav from "../components/DashboardNav";
import useCategoriesStore from "../store/store";

function Categories() {
  const { categories } = useCategoriesStore();

  // helper to render the right component
  const renderComponent = (widget) => {
    if (widget.component === "Chart") {
      return <Chart data={widget.data} />;
    }
    return null; // fallback for future components
  };

  return (
    <>
      <DashboardNav />
      <div className="p-8 space-y-8 bg-base-300">
        {categories.map((category, idx) => (
          <div key={idx}>
            <h2 className="text-xl font-bold mb-4">{category.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.widgets.map((w, i) => (
                <Widget key={i} title={w.title} component={renderComponent(w)} />
              ))}

              {/* Always render extra empty widget */}
              <Widget title="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Categories;
