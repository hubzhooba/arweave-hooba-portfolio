
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen px-4 sm:px-[2%] md:px-[5%] lg:px-[7.5%] xl:px-[10%]">
      <Hero />
      <Work />
      <About />
      <Footer />
    </main>
  );
}
