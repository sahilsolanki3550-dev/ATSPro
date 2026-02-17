import HeroSection from "@/components/HeroSection";
import InputSection from "@/components/InputSection";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="space-y-10">
      <NavBar />
      <HeroSection />
      <InputSection />
    </div>
    </>
  );
}
