"use client";
import Image from "next/image";
import { projects } from "./projects";
import Link from "next/link";
import { Suspense } from "react";
import { ModalProject } from "../Modal";

export const Works = () => {
  return (
    <Suspense>
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
            return <ModalProject key={index} project={project}></ModalProject>;
          })}
          {/* <ModalProject project={projects[0]}></ModalProject> */}
        </section>
      </section>
    </Suspense>
  );
};
