import Image from "next/image";
import { skills } from "./skills";
import { Tooltip } from "@nextui-org/react";

export const Skills = () => {
  return (
    <div className=" bg-gradient-to-r from-[rgb(244,114,182,0.4)] p-[40px] rounded-lg">
      <h2 className=" text-center text-purple-500 text-4xl my-12">
        Mis habilidades técnicas
      </h2>
      <section
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(80px,1fr))" }}
        className=" grid gap-4  w-[95%] m-auto justify-between"
      >
        {skills.map((skill, index) => {
          return (
            <Tooltip key={index + skill.title} content={skill.title}>
              <picture className=" border-white border-x-2 border-y-2 cursor-pointer flex items-center justify-center aspect-square max-h-[100px] bg-[rgb(10,25,59)] p-4 rounded-2xl transition-all hover:rotate-[25deg]">
                <Image
                  className=" w-full h-full object-cover"
                  src={skill.src}
                  alt={skill.title}
                ></Image>
              </picture>
            </Tooltip>
          );
        })}
      </section>
    </div>
  );
};
