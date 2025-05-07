import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
    return (
        <>
            <Navbar />
            <main className="px-20 pt-15">
                <Outlet />
            </main>
            <footer></footer>
        </>
    );
};

export default Layout;
