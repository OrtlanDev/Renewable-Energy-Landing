import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import AuthLayout from "../layout/AuthLayout";
import Layout from "../layout/Layout";
import BlogPage from "../pages/Blog";
import HomePage from "../pages/Home";
import LoginForm from "../pages/Login";
import NotFound from "../pages/NotFound";
import RegisterForm from "../pages/Register";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="ecoenergy/auth/" element={<AuthLayout />}>
                <Route path="login" element={<LoginForm />} />
                <Route path="register" element={<RegisterForm />} />
            </Route>

            <Route path="ecoenergy/" element={<Layout />}>
                <Route index element={<Navigate to="home" replace />} />
                <Route path="home" element={<HomePage />} />
                <Route
                    path="blog"
                    element={
                        <ProtectedRoute>
                            <BlogPage />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
