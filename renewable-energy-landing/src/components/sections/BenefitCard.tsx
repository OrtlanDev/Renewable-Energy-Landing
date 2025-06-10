import { Check } from "lucide-react";

interface BenefitCardProps {
    icon: React.ReactNode;
    title: string;
    items: string[];
    iconColorClass?: string;
}

export function BenefitCard({ icon, title, items, iconColorClass = "text-primary" }: BenefitCardProps) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className={`h-12 w-12 rounded-full bg-primary-alfa-25 flex items-center justify-center mb-4`}>
                <div className={`h-6 w-6 ${iconColorClass}`}>{icon}</div>
            </div>
            <h3 className="text-xl font-semibold text-primary-dark mb-3">{title}</h3>
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <Check className={`h-5 w-5 ${iconColorClass} mt-0.5 flex-shrink-0`} />
                        <span className="text-secondary-text">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
