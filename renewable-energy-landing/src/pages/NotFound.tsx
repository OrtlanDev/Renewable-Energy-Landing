import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4">
            <img src="/images/logo.svg" alt="EcoEnergy" className="w-24 h-24 mb-6 opacity-80" />
            <h1 className="text-5xl font-bold text-primary-dark mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-primary mb-2">Página no encontrada</h2>
            <p className="text-secondary-text mb-6 text-center max-w-md">
                Lo sentimos, la página que buscas no existe o fue movida. Por favor, verifica la URL o regresa al
                inicio.
            </p>
            <Link
                to="/ecoenergy/home"
                className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
                Ir al inicio
            </Link>
        </div>
    );
};

export default NotFound;
