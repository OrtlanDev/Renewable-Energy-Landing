import clsx from "clsx";
import type { ReactNode } from "react";
import { NavLink, type NavLinkProps } from "react-router-dom";

interface NavbarLinkProps extends NavLinkProps {
    icon?: ReactNode;
    children: ReactNode;
    activeClassName?: string;
    baseClassName?: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({
    to,
    icon,
    children,
    activeClassName = "text-primary",
    baseClassName = "flex items-center gap-2 px-4 py-2",
    ...rest
}) => {
    return (
        <NavLink to={to} className={({ isActive }) => clsx(baseClassName, { [activeClassName]: isActive })} {...rest}>
            {icon}
            {children}
        </NavLink>
    );
};

export default NavbarLink;
