import Footer from "@/app/components/sections/Footer";
import Header from "@/app/components/sections/Header";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="flex flex-col">
        <div className="container mx-auto min-h-screen bg-navy-100 p-4"></div>
      </main>
      <Footer />
    </div>
  );
}
