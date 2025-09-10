import React from "react";
import AddWidget from "./AddWidget";

function Widget({ title, component }) {
  return (
    <div className="card bg-base-100 h-[30vh] md:h-[20vh] lg:h-[33vh] lg:w-[30vw] shadow-sm">
      <div className="card-body h-full flex flex-col">
        <h2 className="text-sm font-semibold leading-tight ">{title}</h2>

        <div className="flex-1 w-full overflow-hidden justify-center items-center">
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
