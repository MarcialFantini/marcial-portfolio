"use client";
import Image from "next/image";
import { projects } from "./projects";
import Link from "next/link";
import { Suspense } from "react";

export const Works = () => {
  return (
    <section
      id="Trabajos"
      className=" w-[90%] max-w-[1200px] p-[40px] mx-auto my-[50px] bg-gradient-to-l from-[rgb(20,184,166,0.4)] rounded-lg"
    >
      <h2
        style={{ textShadow: "0px 0px 20px purple" }}
        className=" text-4xl text-white text-center m-[40px] "
      >
        Mis últimos proyectos
      </h2>
      <div className=" grid md:grid-cols-2 gap-4">
        {projects.map((project, index) => {
          return (
            <Link
              target="_blank"
              href={project.link}
              key={project.title + index}
            >
              <article className=" max-h-[600px] border-black border-x-2 border-y-2 relative flex items-start justify-start overflow-hidden rounded-2xl">
                <h4 className=" absolute p-4 bg-[rgb(0,0,0,0.2)] backdrop-blur-sm w-full text-center z-10 text-base">
                  {project.title}
                </h4>

                <picture className=" overflow-hidden w-full flex ">
                  <Suspense>
                    <Image src={project.img} alt={project.title}></Image>
                  </Suspense>
                </picture>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
