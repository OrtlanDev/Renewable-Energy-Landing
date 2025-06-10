import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeButton from "../components/HomeButtom";
import { useAuthStore } from "../stores/auth-store";
import { authSchema } from "../validations/auth-validation";

export default function RegisterForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
    const [loading, setLoading] = useState(false);
    const register = useAuthStore((state) => state.register);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        const result = authSchema.safeParse({ username, password });
        if (!result.success) {
            const fieldErrors: { username?: string; password?: string } = {};
            result.error.errors.forEach((err) => {
                if (err.path[0] === "username") fieldErrors.username = err.message;
                if (err.path[0] === "password") fieldErrors.password = err.message;
            });
            setErrors(fieldErrors);
            return;
        }
        setLoading(true);
        try {
            await register(username, password);
            navigate("/ecoenergy/home");
        } catch (error) {
            console.error("Error al registrarse:", error);
            toast.error("No se pudo completar el registro. Intenta con otro usuario o revisa los datos ingresados.", {
                position: "top-right",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <HomeButton />

            <h1 className="text-2xl font-bold text-center text-gray-800">Registro</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                    <label htmlFor="username" className="text-sm text-gray-700 mb-1">
                        Nombre
                    </label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Ingrese su nombre de usuario"
                        required
                        autoFocus
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={loading}
                    />
                    {errors.username && <span className="text-red-600 text-xs mt-1">{errors.username}</span>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password" className="text-sm text-gray-700 mb-1">
                        Contraseña
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Ingrese su contraseña"
                        required
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={loading}
                    />
                    {errors.password && <span className="text-red-600 text-xs mt-1">{errors.password}</span>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors focus:outline-4 focus:outline-primary/30 flex items-center justify-center gap-2"
                    disabled={loading}
                >
                    {loading && (
                        <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                        </svg>
                    )}
                    {loading ? "Registrando..." : "Registrarse"}
                </button>
            </form>

            <div className="text-sm text-center text-gray-600">
                ¿Ya tienes una cuenta?{" "}
                <Link to="/ecoenergy/auth/login" className="text-primary hover:underline font-medium">
                    Inicia sesión aquí
                </Link>
            </div>
        </>
    );
}
