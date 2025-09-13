import React from "react";
import Chart from "../components/Chart";
import RiskGraph from "../components/RiskGraph";
import Widget from "../components/Widget";
import DashboardNav from "../components/DashboardNav";
import useCategoriesStore from "../store/store";

function Categories() {
  const { activeWidgets } = useCategoriesStore();

  // Helper to render the right component
  const renderComponent = (widget) => {
    switch (widget.component) {
      case "Chart":
        return <Chart data={widget.data} />;
      case "RiskGraph":
        return <RiskGraph title={widget.title} data={widget.data} />;
      default:
        return null;
    }
  };

  // Group widgets by category for display
  const groupedWidgets = activeWidgets.reduce((acc, w) => {
    if (!acc[w.category]) acc[w.category] = [];
    acc[w.category].push(w);
    return acc;
  }, {});

  return (
    <>
      <DashboardNav />
      <div className="p-8 space-y-8 bg-base-300">
        {Object.entries(groupedWidgets).map(([categoryName, widgets], idx) => (
          <div key={idx}>
            <h2 className="text-xl font-bold mb-4">{categoryName}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {widgets.map((w, i) => (
                <Widget
                  key={i}
                  title={w.title}
                  component={renderComponent(w)}
                />
              ))}
              <Widget title="" /> {/* optional empty widget for spacing */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Categories;
