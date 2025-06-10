import { BenefitsSection } from "../components/sections/BenefitsSection";
import HeroSection from "../components/sections/HeroSection";
import { WhatIsSection } from "../components/sections/WhatIsSection";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <WhatIsSection />
            <BenefitsSection />
        </>
    );
};

export default HomePage;
