import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";

import srcTop from "../../../public/image/top-image.jpg";
import Image from "next/image";

export const WhoIam = () => {
  return (
    <article className="w-[95%] m-auto min-h-[400px] gap-2 md:grid md:grid-cols-6 my-[40px] ">
      <header className="flex flex-col items-start justify-center w-full h-full p-2 md:col-start-1 md:col-end-5">
        <h2 className=" text-2xl">Soy Marcial</h2>
        <h1 className=" my-4 text-4xl">
          Programador{" "}
          <span
            style={{ textShadow: "0px 0px 20px white" }}
            className=" text-purple-500"
          >
            Full-Stack
          </span>
        </h1>

        <p>
          ¡Hola! Soy un apasionado desarrollador con 3 años de estudio en
          programación. Mi viaje comenzó en Platzi, donde completé cursos
          avanzados en tecnologías como React.js, Sequelize, Express, Git y
          Redux Toolkit. Desde entonces, he estado inmerso en el mundo del
          desarrollo web, creando una variedad de proyectos emocionantes.
        </p>
        <div className=" py-2 flex gap-2">
          <Button color="secondary" variant="shadow">
            Hablemos
          </Button>
          <Button color="warning" variant="ghost">
            Proyectos
          </Button>
        </div>
      </header>

      <picture className=" overflow-hidden w-full h-full rounded-md col-start-5 col-end-7">
        <Image
          className=" w-full h-full object-cover hover:scale-125 transition-all"
          alt="img top"
          src={srcTop}
        ></Image>
      </picture>
    </article>
  );
};
