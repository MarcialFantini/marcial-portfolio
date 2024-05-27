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
        My recent projects
      </h2>
      <section className=" grid lg:grid-cols-4 gap-4">
        {projects.map((project, index) => {
          return (
            <Link
              target="_blank"
              href={project.link}
              key={project.title + index}
              className=" "
            >
              <article className="  border-black border-x-2 border-y-2 relative flex items-start justify-start overflow-hidden rounded-2xl">
                <h4 className=" bottom-0 absolute p-4 bg-[rgb(0,0,0)] backdrop-blur-sm w-full text-center z-10 text-base">
                  {project.title}
                </h4>

                <picture className=" max-h-[600px] overflow-hidden w-full flex justify-start items-start">
                  <Suspense>
                    <Image
                      className="w-full h-full object-cover "
                      src={project.img}
                      alt={project.title}
                    ></Image>
                  </Suspense>
                </picture>
              </article>
            </Link>
          );
        })}
      </section>
    </section>
  );
};
