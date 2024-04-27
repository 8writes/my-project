import Brands from "@/components/brands";
import ContactBanner from "@/components/contact-banner";
import Partners from "@/components/partners";
import ProjectsBtn from "@/components/projects-btn";
import ServicesBtn from "@/components/services-btn";
import Hero from "@/views/home/hero";
import Projects from "@/views/home/projects";
import Services from "@/views/home/services";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" lg:min-h-screen">
      <Hero />
      <Services />
      <ServicesBtn />
      
      <ProjectsBtn />
      <Brands />
      <ContactBanner />
    </main>
  );
}
