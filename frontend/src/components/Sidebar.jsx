import React from "react";
import useAuthUser from "../hooks/useAuthUser";
import { Link, useLocation } from "react-router-dom";
import { BellIcon, HomeIcon, ShipWheelIcon, UserIcon } from "lucide-react";

const Sidebar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="w-60 bg-base-200 border-r border-base-300 hidden lg:flex flex-col h-full fixed top-0 left-0">
      <div className="p-4 border-b border-base-300">
        <Link to="/" className="flex items-center gap-2">
          <ShipWheelIcon className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            VisionMeet
          </span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        <Link
          to="/"
          className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
            currentPath === "/" ? "btn-active" : " "
          }`}
        >
          <HomeIcon className="size-5 text-base-content opacity-70" />
          <span>Home</span>
        </Link>

        <Link
          to="/friends"
          className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
            currentPath === "/friends" ? "btn-active" : " "
          }`}
        >
          <UserIcon className="size-5 text-base-content opacity-70" />
          <span>Friends</span>
        </Link>
        <Link
          to="/notifications"
          className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
            currentPath === "/notifications" ? "btn-active" : " "
          }`}
        >
          <BellIcon className="size-5 text-base-content opacity-70" />
          <span>Notifications</span>
        </Link>
      </nav>

      <div className="p-4 border-t border-base-300 mt-auto bg-base-100">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="avatar">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-base-300">
              <img src={authUser?.profilePic} alt="User Avatar" />
            </div>
          </div>

          {/* User Info */}
          <div className="flex-1">
            <p className="font-semibold text-sm truncate">
              {authUser?.fullName}
            </p>
            <div className="flex items-center gap-1 text-xs text-success">
              <span className="size-2 rounded-full bg-success"></span>
              <span>Online</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
