import { ArrowRightIcon, Bike, MapPin, Users } from "lucide-react";
import Image from "next/image";

import Badge from "@/app/components/ui/Badge";
import Button from "@/app/components/ui/Button";

const Hero = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid gap-16 md:gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <Badge showDot variant="dot" size="medium">
            À 10 min de la Grande Plage
          </Badge>
          <h1 className="font-monsterrat text-4xl font-semibold tracking-tight text-navy-900 md:text-6xl">
            Maison de Vacances{" "}
            <span className="inline-block bg-gradient-to-r from-coral-400 to-coral-800 bg-clip-text text-transparent">
              en Vendée
            </span>
          </h1>
          <p>
            Maison complète pour 7 personnes à Saint-Gilles-Croix-de-Vie. Jardin
            privé, vélos inclus, et l&apos;océan à 10 minutes. <br /> Vos
            vacances vendéennes commencent ici.
          </p>
          <div className="flex items-center gap-4">
            <Button
              title="Réserver votre séjour"
              url="/contact"
              size={"xl"}
              icon={ArrowRightIcon}
            />
            <Button
              title="Visite virtuelle"
              url="/la-maison"
              variant={"ghost"}
              size={"xl"}
            />
          </div>
        </div>
        <div className="relative flex h-full w-full justify-center">
          <div className="absolute top-4 left-4 z-10">
            <Badge variant="success" icon={Bike}>
              Pistes cyclables
            </Badge>
          </div>
          <div className="absolute top-4 right-4 z-10">
            <Badge variant="default" icon={MapPin}>
              Grande Plage
            </Badge>
          </div>
          <div className="absolute right-4 bottom-4 z-10">
            <Badge variant="primary" icon={Users}>
              7 personnes
            </Badge>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border-2 border-navy-900">
            <Image
              src="/ext_2.png"
              alt="Maison de vacances Saint-Gilles avec jardin clos et volets bleus"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
