import React from "react";
import AddWidget from "./AddWidget";

function Widget({ title, component }) {
  return (
    <div className="card bg-base-100 h-[50vh] lg:h-[33vh] shadow-sm">
      <div className="card-body h-full flex flex-col">
        <h2 className="card-title">{title}</h2>

        <div className="flex-1 w-full overflow-auto">
          {component ? (component) : (
            <div className="flex h-full items-center justify-center">
              <AddWidget/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Widget;
