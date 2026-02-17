import MainSection from "@/components/MainSection";
import NavBar from "@/components/NavBar";
import Result from "@/components/Result";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="space-y-10">
      <NavBar />
      <MainSection />
      <Result />
    </div>
    </>
  );
}
