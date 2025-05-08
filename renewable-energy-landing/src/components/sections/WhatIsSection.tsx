import { EnergyCard } from "../EnergyCard";

export function WhatIsSection() {
    return (
        <section id="what-is" className="py-22 px-20">
            <div>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                        ¿Qué es la energía renobable?
                    </h2>
                    <p className="text-lg text-gray-700">
                        La energía renovable proviene de fuentes naturales que se reponen constantemente. A diferencia
                        de los combustibles fósiles, estas fuentes de energía no se agotarán y producen emisiones
                        mínimas de gases de efecto invernadero.
                    </p>
                </div>

                <div className="flex items-center justify-center">
                    <div>
                        <div className="grid grid-cols-3 gap-6">
                            <EnergyCard
                                imagePath="src/assets/images/sun.png"
                                title="Energía Solar"
                                description="Aprovecha la energía del sol mediante paneles fotovoltaicos para generar electricidad o calor."
                            />

                            <EnergyCard
                                imagePath="src/assets/images/wind.png"
                                title="Energía Eólica"
                                description="Convierte la energía cinética del viento en energía mecánica o eléctrica mediante aerogeneradores."
                            />

                            <EnergyCard
                                imagePath="src/assets/images/water.png"
                                title="Energía Hidroeléctrica"
                                description="Genera electricidad al aprovechar la energía del agua en movimiento a través de presas o corrientes de ríos."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
