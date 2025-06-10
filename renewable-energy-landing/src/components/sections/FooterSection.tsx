import { Home, Mail, Newspaper, Phone, Sprout } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-primary-dark text-green-100 px-20">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Información de la empresa */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <Sprout className="h-6 w-6 " />
                            <span className="text-xl font-bold text-white">EcoEnergy</span>
                        </Link>
                        <p className="mb-4 text-green-200">
                            Impulsando un futuro sostenible a través de soluciones de energía renovable.
                        </p>
                    </div>

                    {/* Enlaces rápidos */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Enlaces rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#what-is" className="text-green-200 hover:text-white transition-colors">
                                    ¿Qué es la energía renovable?
                                </a>
                            </li>
                            <li>
                                <a href="#benefits" className="text-green-200 hover:text-white transition-colors">
                                    Beneficios
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="text-green-200 hover:text-white transition-colors">
                                    Testimonios
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Recursos */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Secciones</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/ecoenergy/home"
                                    className="flex items-center gap-2 text-green-200 hover:text-white transition-colors"
                                >
                                    <Home size={20} />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/ecoenergy/blog"
                                    className="flex items-center gap-2 text-green-200 hover:text-white transition-colors"
                                >
                                    <Newspaper size={20} />
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                <span>info@ecoenergy.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                <span>+53 51889404</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-green-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-green-300">
                        &copy; {new Date().getFullYear()} EcoEnergy. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="text-sm text-green-300 hover:text-white transition-colors">
                            Política de privacidad
                        </a>
                        <a href="#" className="text-sm text-green-300 hover:text-white transition-colors">
                            Términos del servicio
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
