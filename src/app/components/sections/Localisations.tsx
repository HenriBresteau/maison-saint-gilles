"use client";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import BadgeSection from "@/app/components/ui/BadgeSection";

const Localisations = () => {
  const pointsOfInterest = [
    {
      id: 1,

      image: "/localisations/beach.png",
      title: "Grande Plage",
      distance: "10 min à vélo",
      description: "Plage surveillée et sable fin",
    },
    {
      id: 2,
      image: "/localisations/market.png",
      title: "Leclerc",
      distance: "5 min en voiture",
      description: "Centre commercial et courses",
    },
    {
      id: 3,
      image: "/localisations/train.png",
      title: "Gare SNCF",
      distance: "10 min",
      description: "Liaison directe Nantes 1h",
    },
    {
      id: 4,
      image: "/localisations/city.png",
      title: "Centre-ville",
      distance: "10 min à vélo",
      description: "Restaurants et commerces",
    },
  ];
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="mb-16 text-center">
        <BadgeSection variant="default" icon={MapPin}>
          Localisation
        </BadgeSection>
        <h2 className="font-montserrat mt-6 text-3xl font-semibold text-navy-900 md:text-5xl">
          Idéalement située
        </h2>
      </div>
      <div className="grid grid-cols-1 items-center rounded-2xl bg-coral-100 lg:grid-cols-3 lg:gap-12">
        <div className="relative col-span-2">
          <div className="relative overflow-hidden rounded-2xl border-cream-100">
            <div className="h-[660px] overflow-hidden rounded-2xl">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1ZhRYaQTwXeH2qOHvIef0vfGpeWrURcM"
                width="100%"
                height="100%"
                className="border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="relative py-14 lg:py-20">
          <div className="absolute top-1/2 -right-24 translate-x-full -translate-y-1/2 transform">
            <div className="relative h-96 w-64">
              {/* Logo - toujours visible mais qui bouge */}
              <div
                className="absolute top-0 left-0 transform transition-all duration-500 ease-out"
                style={{
                  transform: `translateY(${hoveredCard ? "-140px" : "0px"}) scale(${hoveredCard ? "0.4" : "1"})`,
                  opacity: hoveredCard ? 0.6 : 1,
                }}
              >
                <div className="flex h-64 w-64 items-center justify-center rounded-full bg-navy-950 p-6 shadow-lg">
                  <Image
                    src="icon.svg"
                    alt="Logo"
                    width={200}
                    height={200}
                    className="h-48 w-48 object-contain"
                  />
                </div>
              </div>

              {/* Images - stack de 3 max : n-1, hover (centre), n+1 */}
              {pointsOfInterest.map((point, index) => {
                const isActive = hoveredCard === point.id;
                const activeIndex = hoveredCard
                  ? pointsOfInterest.findIndex((p) => p.id === hoveredCard)
                  : -1;

                // Logique du stack de 3
                let shouldShow = false;
                let translateY = 0;
                let opacity = 0;
                let scale = 0.7;

                if (hoveredCard && activeIndex !== -1) {
                  if (isActive) {
                    // Élément actif : toujours au centre
                    shouldShow = true;
                    translateY = 0;
                    opacity = 1;
                    scale = 1;
                  } else if (index === activeIndex - 1) {
                    // Élément précédent : au-dessus
                    shouldShow = true;
                    translateY = -80;
                    opacity = 0.5;
                    scale = 0.7;
                  } else if (index === activeIndex + 1) {
                    // Élément suivant : en dessous
                    shouldShow = true;
                    translateY = 80;
                    opacity = 0.5;
                    scale = 0.7;
                  }
                }

                return (
                  <div
                    key={point.id}
                    className="absolute top-0 left-0 transform transition-all duration-500 ease-out"
                    style={{
                      transform: `translateY(${translateY}px) scale(${scale})`,
                      opacity: opacity,
                      zIndex: isActive ? 10 : 1,
                    }}
                  >
                    <div className="flex h-64 w-64 items-center justify-center rounded-full bg-navy-950 p-6 shadow-lg">
                      <Image
                        src={point.image}
                        alt={point.title}
                        width={200}
                        height={200}
                        className="h-48 w-48 object-contain"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <ul className="relative z-20 space-y-6 px-4 lg:mr-12 lg:px-0">
            {pointsOfInterest.map((point, index) => (
              <li
                key={point.id}
                className="z-10 flex cursor-pointer items-start gap-4 rounded-xl border border-transparent bg-cream-50 px-6 py-4 shadow-xs transition-all duration-300 hover:border-coral-600 hover:shadow"
                onMouseEnter={() => setHoveredCard(point.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="min-w-[2rem] font-monsterrat text-lg font-semibold text-navy-900">
                  0{index + 1}.
                </div>
                <div className="flex-1">
                  <h3 className="font-montserrat mb-1 font-semibold text-navy-900">
                    {point.title}
                  </h3>
                  <p className="mb-1 text-sm font-medium text-coral-600">
                    {point.distance}
                  </p>
                  <p className="text-sm text-slate-600">{point.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Localisations;
