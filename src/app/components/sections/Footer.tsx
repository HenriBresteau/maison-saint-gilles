import {
    Calendar, ChevronRight, Flag, Mail, MapPin, TimerIcon, UsersRound, Waves
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="group container mx-auto rounded-t-4xl bg-navy-900 p-4">
      <div className="relative grid grid-cols-1 gap-8 overflow-hidden rounded-2xl bg-gradient-to-r from-coral-500 to-coral-600 p-10 md:grid-cols-12">
        <div className="absolute bottom-10 -left-8 flex translate-y-1/2 items-center justify-center opacity-10 transition-transform duration-300 group-hover:scale-200 group-hover:rotate-6">
          <Image
            src="/icon.svg"
            alt=""
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-4 md:col-span-6">
          <div className="flex items-center gap-2">
            <Image
              src="/icon.svg"
              alt="Icon Maison Saint-gilles"
              width={36}
              height={36}
              className=""
            />
            <h2 className="font-monsterrat text-xl font-semibold tracking-tight text-black">
              Maison Saint-Gilles
            </h2>
          </div>
          <p className="max-w-md text-black">
            Votre maison de vacances en Vendée. <br />
            Séjours au cœur de Saint-Gilles-Croix-de-Vie.
          </p>
        </div>
        <div className="md:col-span-3">
          <h3 className="mb-3 font-semibold text-black">Informations</h3>
          <ul className="space-y-2 text-sm text-black">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Saint-Gilles-Croix-de-Vie
            </li>
            <li className="flex items-center gap-2">
              <Flag size={16} />
              Vendée (85)
            </li>
            <li className="flex items-center gap-2">
              <UsersRound size={16} /> Jusqu&apos;à 7 personnes
            </li>
            <li className="flex items-center gap-2">
              <Waves size={16} /> 10 min de la plage
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h3 className="mb-3 font-semibold text-black">Contact</h3>
          <ul className="space-y-2 text-sm text-black">
            <li className="flex items-center gap-2">
              <Mail size={16} /> Via notre formulaire
            </li>
            <li className="flex items-center gap-2">
              <TimerIcon size={16} />
              Réponse rapide
            </li>
            <li className="flex items-center gap-2">
              <Calendar size={16} /> Disponibilités en temps réel
            </li>
            <Link
              href="/contact"
              className="flex w-fit items-center gap-2 rounded-lg bg-navy-900 px-4 py-2 text-sm text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-navy-900 hover:shadow-xl"
            >
              Nous écrire
              <ChevronRight size={16} />
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center p-4">
        <p className="text-xs text-black opacity-70">
          {new Date().getFullYear()} - &copy; Henri Bresteau
        </p>
      </div>
    </div>
  );
};

export default Footer;
