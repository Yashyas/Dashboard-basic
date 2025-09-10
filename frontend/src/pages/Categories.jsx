import React from "react";
import Chart from "../components/Chart";
import Widget from "../components/Widget";
import DashboardNav from "../components/DashboardNav";

// Example JSON structure
const categoriesData = [
  {
    category: "Analytics",
    widgets: [
      { title: "Sales", component: "Chart" },
      { title: "Users", component: "Chart" },
      { title: "Revenue", component: "Chart" },
      { title: "Traffic", component: "Chart" },
    ],
  },
  {
    category: "Reports",
    widgets: [
      { title: "Monthly", component: "Chart" },
      { title: "Yearly", component: "Chart" },
    ],
  },
];

// Map component name → actual component
const componentMap = {
  Chart: <Chart />,
};

function Categories() {
  return (
    <>
    <DashboardNav/>
    <div className="p-4 space-y-8 bg-base-300">
      {categoriesData.map((category, idx) => (
        <div key={idx}>
          <h2 className="text-xl font-bold mb-4">{category.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.widgets.map((w, i) => (
              <Widget
                key={i}
                title={w.title}
                component={componentMap[w.component]}
              />
            ))}

            {/* Extra empty widget */}
            <Widget title="" />
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Categories;
