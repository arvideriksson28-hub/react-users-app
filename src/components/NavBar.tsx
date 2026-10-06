import { NavLink } from "react-router-dom";

interface NavItem {
    to: string;
    label: string;
}

// Justera sökvägarna så att de matchar dina routes
const navItems: NavItem[] = [
    { to: "/", label: "Hem" },
    { to: "/users", label: "Användare" },
];

function getLinkClasses(isActive: boolean): string {
    const base =
        "rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2";

    return isActive
        ? `${base} bg-slate-900 text-white`
        : `${base} border border-slate-200 bg-white text-slate-700 hover:bg-slate-100`;
}

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
            <nav
                className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
                aria-label="Huvudmeny"
            >
                <span className="text-base font-semibold text-slate-900">
                    Users App
                </span>

                <ul className="flex gap-2">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                end={item.to === "/"}
                                className={({ isActive }) =>
                                    getLinkClasses(isActive)
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
