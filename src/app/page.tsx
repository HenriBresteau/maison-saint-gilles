import LayoutPage from "@/app/components/layout/LayoutPage";
import Features from "@/app/components/sections/Features";
import Hero from "@/app/components/sections/Hero";

export default function Home() {
  return (
    <LayoutPage>
      <Hero />
      <Features />
    </LayoutPage>
  );
}
