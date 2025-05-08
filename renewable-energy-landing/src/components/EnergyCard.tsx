interface EnergyCardProps {
    imagePath: string;
    title: string;
    description: string;
}

export const EnergyCard = ({ imagePath, title, description }: EnergyCardProps) => {
    return (
        <div className="flex flex-col items-center justify-center card">
            <img src={imagePath} alt="Energy source" className="max-w-50" />
            <div className="pb-2">
                <div className="flex items-center gap-2 font-medium text-primary-text text-lg">{title}</div>
            </div>
            <p className="text-sm text-muted-foreground text-center text-secondary-text">{description}</p>
        </div>
    );
};
