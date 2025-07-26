import { Bike, ChefHat, LayoutGrid, MapPin, Trees } from 'lucide-react';

import BadgeSection from '@/app/components/ui/BadgeSection';
import CardFeature from '@/app/components/ui/CardFeature';

const Features = () => {
  const features = [
    {
      icon: ChefHat,
      title: "Cuisine Équipée",
      description:
        "Grand frigo congélateur, lave-vaisselle, plaque induction, four électrique. Tout l'équipement pour préparer vos repas en famille.",
    },
    {
      icon: Trees,
      title: "Jardin Clos",
      description:
        "120m² de jardin privé et sécurisé. Terrasse avec table pour 8 personnes, barbecue et 6 chaises longues pour la détente.",
    },
    {
      icon: Bike,
      title: "7 Vélos Inclus",
      description:
        "Vélos adultes avec antivols pour explorer les pistes cyclables vendéennes. Accès direct à la grande plage et au centre-ville.",
    },
    {
      icon: MapPin,
      title: "Localisation Parfaite",
      description:
        "10 minutes à vélo de la grande plage surveillée, 5 minutes en voiture des commerces. Parking gratuit sur place.",
    },
  ];
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <BadgeSection variant="default" size="medium" icon={LayoutGrid}>
            Équipements
          </BadgeSection>
          <h2 className="font-monsterrat max-w-sm text-center text-3xl font-semibold tracking-tight text-navy-900 md:text-4xl">
            Tout le confort pour vos vacances
          </h2>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature, index) => (
          <CardFeature
            key={index}
            title={feature.title}
            icon={feature.icon}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
