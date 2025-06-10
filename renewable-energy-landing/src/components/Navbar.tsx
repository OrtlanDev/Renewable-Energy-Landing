import { Button } from "@radix-ui/themes";
import { Home, LogOut, Newspaper, Sprout, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../stores/auth-store";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
    const { user, isAuthenticated, logout } = useAuthStore();

    return (
        <nav className="fixed z-50 flex items-center justify-between w-full h-15 texture bg-glass px-20">
            <div className="flex gap-12">
                {/* Logo */}
                <div className="flex items-center gap-2 text-primary-dark">
                    <Sprout />
                    <span className="font-black uppercase tracking-widest">EcoEnergy</span>
                </div>

                <div className="flex">
                    <NavbarLink to="/ecoenergy/home" icon={<Home size={20} />}>
                        Home
                    </NavbarLink>
                    <NavbarLink to="/ecoenergy/blog" icon={<Newspaper size={20} />}>
                        Blog
                    </NavbarLink>
                </div>
            </div>

            <div className="flex items-center gap-4">
                {!isAuthenticated ? (
                    <>
                        <Button size={"3"} className="text-primary-dark! bg-primary-alfa-25!">
                            <Link to={"/ecoenergy/auth/register"}>Registrarse</Link>
                        </Button>
                        <Button size={"3"} className="bg-primary-dark!">
                            <Link to={"/ecoenergy/auth/login"}>Iniciar Sesión</Link>
                        </Button>
                    </>
                ) : (
                    <>
                        <span className="text-primary-dark font-medium flex items-center gap-2">
                            <div className="p-2 bg-primary-alfa-25 rounded-full w-10 h-10 flex items-center justify-center">
                                <UserRound className="text-primary-text" size={20} />
                            </div>
                            {user?.username}
                        </span>
                        <Button
                            size={"3"}
                            className="w-10! h-10! p-0! text-red-600/75! bg-transparent! hover:bg-gray-100!"
                            onClick={() => logout()}
                        >
                            <LogOut size={20} />
                        </Button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
