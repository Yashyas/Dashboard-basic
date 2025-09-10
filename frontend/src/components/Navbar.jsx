import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm grid grid-cols-12 items-center ">
      {/* Left: Breadcrumbs */}
      <div className="col-span-6 lg:col-span-5">
        <div className="breadcrumbs text-sm">
          <ul>
            <li><a>Home</a></li>
            <li><a>Dashboard V2</a></li>
          </ul>
        </div>
      </div>

      {/* Center: Search */}
      <div className="col-span-4 flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      {/* Right: Profile */}
      <div className="col-span-2 lg:col-span-3 flex justify-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
