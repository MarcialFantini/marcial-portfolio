import Image from "next/image";
import { skills } from "./skills";
import { Tooltip } from "@nextui-org/react";
import srcFlower from "../../../public/image/flower.png";
import { Suspense } from "react";

export const Skills = () => {
  return (
    <div
      id="Habilidades"
      className="  bg-gradient-to-r from-[rgb(244,114,182,0.4)] p-[40px] rounded-lg relative"
    >
      <picture className=" absolute z-[-1] h-full bottom-0 right-0 ">
        <Suspense>
          <Image
            className=" object-contain w-full h-full "
            src={srcFlower}
            alt="flower"
          ></Image>
        </Suspense>
      </picture>
      <h2
        style={{ textShadow: "purple 0px 0px 10px" }}
        className=" text-center text-white text-4xl my-12 shadow-lg"
      >
        My technical skills
      </h2>
      <section
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(80px,1fr))" }}
        className=" grid gap-4  w-[95%] m-auto justify-between"
      >
        {skills.map((skill, index) => {
          return (
            <Suspense key={index + skill.title}>
              <Tooltip key={index + skill.title} content={skill.title}>
                <picture className=" border-white border-x-2 border-y-2 cursor-pointer flex items-center justify-center aspect-square max-h-[100px] bg-[rgb(10,25,59)] p-4 rounded-2xl transition-all hover:rotate-[25deg]">
                  <Image
                    className=" w-full h-full object-cover"
                    src={skill.src}
                    alt={skill.title}
                  ></Image>
                </picture>
              </Tooltip>
            </Suspense>
          );
        })}
      </section>
    </div>
  );
};
