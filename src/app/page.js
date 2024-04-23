import Hero from "@/views/home/hero";
import Projects from "@/views/home/projects";
import Services from "@/views/home/services";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" lg:min-h-screen py-10">
      <Hero />
      <Services />
    </main>
  );
}
