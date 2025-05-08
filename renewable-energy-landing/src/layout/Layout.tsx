import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    );
};

export default Layout;
