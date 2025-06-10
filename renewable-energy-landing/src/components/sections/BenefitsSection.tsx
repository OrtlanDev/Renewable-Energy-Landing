import { Coins, Globe, Heart, Leaf } from "lucide-react";
import { BenefitCard } from "./BenefitCard";

export function BenefitsSection() {
    return (
        <section id="benefits" className="p-20 bg-green-50">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <BenefitCard
                    icon={<Leaf />}
                    title="Ambientales"
                    items={[
                        "Reduce las emisiones de gases de efecto invernadero",
                        "Mejora la calidad del aire y del agua",
                        "Preserva los ecosistemas naturales",
                    ]}
                />

                <BenefitCard
                    icon={<Coins />}
                    title="Económicos"
                    items={[
                        "Genera empleos y estimula la economía",
                        "Reduce los costos de energía a largo plazo",
                        "Proporciona estabilidad en los precios de la energía",
                    ]}
                />

                <BenefitCard
                    icon={<Heart />}
                    title="Sociales"
                    iconColorClass="text-green-600"
                    items={[
                        "Mejora la salud pública",
                        "Aumenta el acceso a la energía en zonas remotas",
                        "Fortalece comunidades resilientes",
                    ]}
                />

                <BenefitCard
                    icon={<Globe />}
                    title="Globales"
                    iconColorClass="text-green-600"
                    items={[
                        "Mitiga los impactos del cambio climático",
                        "Reduce los conflictos energéticos internacionales",
                        "Promueve los objetivos de desarrollo sostenible",
                    ]}
                />
            </div>
        </section>
    );
}
