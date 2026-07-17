import { SiteFrame } from "@/components/site/site-frame";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Work from "@/components/sections/work";
import Stack from "@/components/sections/stack";
import Research from "@/components/sections/research";
import Contact from "@/components/sections/contact";

export default function Page() {
  return (
    <>
      <SiteFrame />
      <main className="relative">
        <Hero />
        <About />
        <Work />
        <Stack />
        <Research />
        <Contact />
      </main>
    </>
  );
}
