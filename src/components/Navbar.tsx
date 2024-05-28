import { NavLink } from "react-router-dom";
import { logo } from "../assets/images/logo";

const Navbar = () => {
	return (
		<header className="header">
			<NavLink to="/">
				<img src={logo} className="w-12 h-12 object-cover" alt="logo" />
			</NavLink>
			<nav className="flex text-lg gap-7 font-medium">
				<NavLink
					to="/about"
					className={({ isActive }) =>
						isActive ? "text-blue-600" : "text-black"
					}
				>
					About
				</NavLink>
				<NavLink
					to="/projects"
					className={({ isActive }) =>
						isActive ? "text-blue-600" : "text-black"
					}
				>
					Projects
				</NavLink>
				<NavLink
					to="/contact"
					className={({ isActive }) =>
						isActive ? "text-blue-600" : "text-black"
					}
				>
					Contact Us
				</NavLink>
			</nav>
		</header>
	);
};

export default Navbar;
