import React from "react";
import Navbar from "@/components/Navbar";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import Pf from "@/public/Pf.jpg";
import Tools from "@/components/Tools";
import { Technologies } from "@/components/Technologies";
import SparklesText from "@/components/ui/sparkles-text";
import { Cards } from "@/components/ui/Cards";
import { Footer } from "@/components/Footer";

const Page = () => {
  return (
    <>
      <Navbar />
      
      {/* Home Section */}
      <section id="home" className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg bg-black p-20 md:shadow-xl">
        <div className="relative h-[550px] w-[1150px] rounded-xl text-left p-7">
          <div className="z-10 text-white">
            <p className="font-mono mb-4 text-6xl">Namaste(); I'm</p>
            <h1 className="text-8xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-purple-400 text-transparent bg-clip-text mb-6">
              Renuka Kothekar
            </h1>
            <h2 className="text-6xl font-bold mb-8">I design & code for web.</h2>
            <h2 className="text-3xl">
              Passionate Web Developer with a flair for Digital Concept Art.
            </h2>
            <h2 className="text-3xl">
              Crafting modern, engaging Frontend Designs that bring ideas to life.
            </h2>
            <h2 className="text-3xl">
              Enthusiastic about creating enjoyable UI, teamwork, and building
            </h2>
            <h2 className="text-3xl">innovative products.</h2>
          </div>
          <Image
            src={Pf}
            alt="Profile Picture"
            className="absolute top-4 left-[300px] h-[300px] w-[320px] border-4 border-white gap-[50px] ml-[500px]"
          />
          <BorderBeam />
        </div>
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          )}
        />
      </section>

      {/* About Section */}
      <section id="about" className="">
        <Tools />
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen pt-20">
        <div className="mt-[20px]">
          <Technologies />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen pt-20">
        <SparklesText text="Projects" />
        <div className="ml-[150px] mt-[80px] m-7 grid grid-cols-1 gap-[60px] lg:grid-cols-2">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="h-9 w-full bg-slate-700">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Page;