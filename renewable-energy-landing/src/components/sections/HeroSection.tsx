import { Button } from "@radix-ui/themes";

const HeroSection = () => {
    return (
        <section className="flex bg-green-50 h-screen px-20 pt-20">
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                <div className="flex-1 space-y-6 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        <span className="text-primary-dark text-nowrap block">Impulsa Tu Futuro Con</span>
                        <span className="text-primary">Energía Renovable</span>
                    </h1>
                    <p className="text-lg md:text-xl text-secondary-text max-w-2xl mx-auto md:mx-0">
                        Únete a la revolución sostenible y descubre cómo la energía renovable puede transformar tu vida,
                        tu comunidad y nuestro planeta.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button size={"4"} className="bg-primary!">
                            Saber Más
                        </Button>
                    </div>
                </div>
                <div className="flex justify-end">
                    <img src="src/assets/images/hero.png" alt="energies" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
