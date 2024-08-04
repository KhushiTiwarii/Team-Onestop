import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  File as FileIcon,
  Book as BookIcon,
  Search as SearchIcon,
  Briefcase as BriefcaseIcon,
} from 'lucide-react';

const routes = [
  {
    label: "DASHBOARD",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-white-500",
  },
  {
    label: "AI Resume Scanner",
    icon: FileIcon,
    href: "/dashboard/resume-scanner",
    color: "text-green-600",
  },
  {
    label: "Placement Resources",
    icon: BookIcon,
    href: "/dashboard/placement-resources",
    color: "text-red-500",
  },
  {
    label: "Interview Preparation",
    icon: SearchIcon,
    href: "/dashboard/interview-preparation",
    color: "text-yellow-300",
  },
  {
    label: "Job Search",
    icon: BriefcaseIcon,
    href: "/dashboard/job-search",
    color: "text-blue-200",
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full bg-purple-950 w-64">
      <div className="px-3 py-4">
        {/* Logo */}
        <img
          src="/logo-1.png" // Path to your logo in the public folder
          alt="Logo"
          className="w-40 h-auto mx-auto mb-0 mt-4"
        />
      </div>
      <div className="px-3 py-9 flex-1 space-y-4">
        {routes.map((route) => (
          <NavLink
            key={route.href}
            to={route.href}
            className={({ isActive }) =>
              `flex items-center p-4 rounded-md bg-white text-white backdrop-blur-md bg-opacity-20 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl space-x-3 ${
                isActive ? "bg-opacity-40" : ""
              }`
            }
          >
            <route.icon className={`w-6 h-6 ${route.color}`} />
            <span className="text-white">{route.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
