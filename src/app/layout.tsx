import type { Metadata } from "next";
import './globals.css';

import { Inter, Montserrat } from 'next/font/google';

const monsterrat = Montserrat({
  variable: "--font-monsterrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maison Saint-Gilles | Location Vacances Vendée",
  description:
    "Maison de vacances pour 7 personnes à Saint-Gilles-Croix-de-Vie. Jardin clos, vélos inclus, à 10 min de la plage. Réservez votre séjour en Vendée.",
  keywords:
    "location vacances, Saint-Gilles-Croix-de-Vie, Vendée, maison familiale, vélos, plage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${monsterrat.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
