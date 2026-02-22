import HeroSection from "@/components/Home/HeroSection";
import InputSection from "@/components/Dashboard/InputSection";
import NavBar from "@/components/CommonUI/NavBar";
import Image from "next/image";
import HomeContainer from "@/containers/HomeContainer";

export default function Home() {
  return (
    <>
    <div className="sticky top-0 z-10">
            <NavBar />
    </div>
    <div className="block md:hidden">
      
    </div>
    <div>
      <HomeContainer />
    </div>
    </>
  );
}
