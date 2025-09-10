import React from "react";
import AddWidget from "./AddWidget";
import HistoryButton from "./HistoryButton";

function DashboardNav() {
  return (
    <div className="navbar bg-base-300 px-2 py-2 flex flex-row items-center justify-between flex-wrap">
      {/* Left: brand */}
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">CNAPP Dashboard</a>
      </div>

      {/* Right: buttons */}
      <div className="flex flex-wrap gap-2 justify-end">
        <div className="flex-shrink-0">
          <AddWidget />
        </div>
        <button className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 30 30"
            className="text-base-content"
            fill="currentColor"
          >
            <path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"></path>
          </svg>
        </button>
        <button className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="text-base-content"
            fill="currentColor"
          >
            <path
              d="M11.992 12H12.001"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M11.9842 18H11.9932"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M11.9998 6H12.0088"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <HistoryButton />
      </div>
    </div>
  );
}

export default DashboardNav;
