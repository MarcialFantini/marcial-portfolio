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
              <div className="relative  overflow-hidden rounded-xl border border-gray-800 p-[4px] backdrop-blur-3xl">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="  flex h-full w-full items-center justify-center rounded-xl bg-gray-950">
                  <article className="relative flex items-start justify-start overflow-hidden rounded-2xl">
                    <h4 className=" bottom-0 absolute p-4 bg-[rgb(0,0,0,.9)] backdrop-blur-sm w-full text-center z-10 text-base">
                      {project.title}
                    </h4>
                    <picture className="overflow-hidden w-full max-h-[500px] flex">
                      <Suspense>
                        <Image
                          className="w-full h-full object-cover"
                          src={project.img}
                          alt={project.title}
                        />
                      </Suspense>
                    </picture>
                  </article>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </section>
  );
};
