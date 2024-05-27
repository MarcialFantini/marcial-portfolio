"use client";
import { Button } from "@nextui-org/react";

import { goToElement } from "@/utils/goToElement";

export const WhoIam = () => {
  const handlerGoToContact = () => goToElement("Contacto");
  const handlerGoWorks = () => goToElement("Trabajos");

  return (
    <article
      id="Inicio"
      className="w-[95%] max-w-[1200px] m-auto  min-h-[400px] gap-2 md:grid md:grid-cols-6 my-[40px] "
    >
      <header className="flex flex-col items-start justify-center w-full h-full p-2 md:col-start-1 md:col-end-5">
        <h2 className=" text-2xl">Soy Marcial</h2>
        <h1 className=" my-4 text-4xl">
          Developer{" "}
          <span
            // style={{ textShadow: "0px 0px 5px white" }}
            className=" text-purple-500"
          >
            Full-Stack
          </span>
        </h1>

        <p>
          Hi! I am a passionate developer with 3 years of studying programming.
          My journey began at Platzi, where I completed advanced courses in
          technologies such as React.js, Sequelize, Express, Git, and Redux
          Toolkit. Since then, I have been immersed in the world of web
          development, creating a variety of exciting projects.
        </p>
        <div className=" py-2 flex gap-2">
          <Button
            onClick={handlerGoToContact}
            color="secondary"
            variant="shadow"
          >
            {"Let's talk"}
          </Button>
          <Button onClick={handlerGoWorks} color="warning" variant="ghost">
            Projects
          </Button>
        </div>
      </header>
    </article>
  );
};
