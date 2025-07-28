import LayoutPage from "@/app/components/layout/LayoutPage";
import Features from "@/app/components/sections/Features";
import Hero from "@/app/components/sections/Hero";
import Localisations from "@/app/components/sections/Localisations";

export default function Home() {
  return (
    <LayoutPage>
      <Hero />
      <Features />
      <div className="bg-cream-100">
        <Localisations />
      </div>
    </LayoutPage>
  );
}
