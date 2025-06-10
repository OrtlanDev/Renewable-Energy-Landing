import { useEffect, useState } from "react";
import { useAuthStore } from "../stores/auth-store";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isAuthenticated } = useAuthStore();
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        if (!isAuthenticated) {
            setShowMessage(true);
            const timer = setTimeout(() => {
                setShowMessage(false);
                window.location.href = "/ecoenergy/auth/login";
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                {showMessage && (
                    <div className="mb-4 p-4 bg-yellow-100 rounded-lg text-yellow-800">
                        Debes estar autenticado para acceder al Blog.
                    </div>
                )}
            </div>
        );
    }
    return <>{children}</>;
};

export default ProtectedRoute;
