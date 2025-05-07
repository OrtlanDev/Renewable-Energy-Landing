import { CircleHelp, Home, Newspaper, Sprout } from "lucide-react";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
    return (
        <nav className="fixed flex items-center justify-between w-full h-15 texture bg-glass px-20">
            <div className="flex items-center gap-2 text-primary">
                <Sprout />
                <span className="font-black uppercase tracking-widest">EcoEnergy</span>
            </div>
            <div className="flex">
                <NavbarLink to="/home" icon={<Home size={20} />}>
                    Home
                </NavbarLink>
                <NavbarLink to="/blog" icon={<Newspaper size={20} />}>
                    Blog
                </NavbarLink>
                <NavbarLink to="/about" icon={<CircleHelp size={20} />}>
                    About
                </NavbarLink>
            </div>
        </nav>
    );
};

export default Navbar;
