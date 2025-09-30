import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Name */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyPortfolio
        </Link>

        {/* Links */}
        <div className="flex gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
