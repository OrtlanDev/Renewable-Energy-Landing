import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import AboutPage from "../pages/About";
import BlogPage from "../pages/Blog";
import HomePage from "../pages/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index path="/home" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
