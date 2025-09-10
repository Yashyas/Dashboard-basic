import React from "react";

function HistoryButton({
  items = ["Updated 5 min ago", "Updated 1 hr ago", "Updated yesterday"],
}) {
  return (
    <div className="dropdown dropdown-end border-primary border-1 rounded-sm">
      {/* trigger */}
      <label
        tabIndex={0}
        className="btn gap-2 px-4 flex items-center whitespace-nowrap text-primary"
        role="button"
      >
        {/* Clock SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="text-primary"
          fill="currentColor"
        >
          <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.314,15.081	c-0.195,0.273-0.503,0.419-0.815,0.419c-0.201,0-0.404-0.061-0.58-0.186l-3.5-2.5c-0.287-0.205-0.445-0.546-0.416-0.897l0.5-6	c0.046-0.55,0.53-0.958,1.08-0.914c0.55,0.046,0.959,0.529,0.914,1.08l-0.453,5.434l3.037,2.169	C16.531,14.007,16.635,14.632,16.314,15.081z"></path>
        </svg>

        {/* Divider line */}
        <div className="w-px h-8 bg-primary" />

        {/* Label */}
        <span className="font-medium hidden md:block">Last update</span>

        {/* Chevron */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </label>

      {/* dropdown content */}
      <ul
        tabIndex={0}
        className="dropdown-content menu menu-sm bg-base-100 rounded-box shadow mt-2 w-56 z-[1]"
      >
        {items.map((it, i) => (
          <li key={i}>
            <a>{it}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryButton;
