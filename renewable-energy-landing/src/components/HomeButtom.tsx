import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeButton() {
    return (
        <Link
            to="/ecoenergy/home"
            className="fixed top-6 left-6  flex items-center gap-2 bg-primary-alfa-25  text-primary-dark  rounded-md px-4 py-2 transition-colors duration-200"
            tabIndex={0}
            aria-label="Ir a Home"
        >
            <Home />
            <span className="font-semibold">Home</span>
        </Link>
    );
}
